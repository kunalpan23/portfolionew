import { PropsWithChildren } from 'react'
import { HANDLE_ON_COMMAND_CHANGE, LS_CLICK_HANDLE } from '../../actions';
import { QueryProps } from '../../interfaces/interfaces';

import { customOnClick, getCaretCoordinates, placeCaretAtEnd } from '../../utils';

export default function({ commandPrefix, isEditable, commandQuery,commandType,  commandOutput, dispatch, index }:PropsWithChildren<QueryProps> ){

    let inputRef:HTMLSpanElement | null;

    const onKeyPress = (e:any) => {
        inputRef?.focus();
        if(e.key === "Enter" && inputRef?.innerText.trim()){
            e.preventDefault();
            inputRef?.focus();
            dispatch(HANDLE_ON_COMMAND_CHANGE, { commandType, value: inputRef?.innerText.trim(),  index});
        }
    }

    const commandOutputClickHandler = (e:any) => {
        customOnClick(e, "list--conatiner__block-label", (el: any) => {
            el.persist();
            let item = el.target.getAttribute("key");
            item = item && JSON.parse(item) || {};

            dispatch(LS_CLICK_HANDLE, item);
        });
    }  

    const setref = (ref: any) => {
        ref && isEditable && ref.focus(); 
        inputRef = ref;
        if(ref) {
            placeCaretAtEnd(ref);
        }
    }

    const handleCaretOnKeyPress = (e:any) => {
        const caretPos: object = getCaretCoordinates();
        console.log(caretPos);
    }

    return (
        <div className={`terminal-command-wrap pl-2 pt-3 pb-2`} onClick={() => inputRef?.focus()}>
            <div className="command flex align-center">
                <span className="prefix-command mr-2">{commandPrefix}</span>
                <span className="text-command" suppressContentEditableWarning={true} onKeyDown={handleCaretOnKeyPress} onClick={handleCaretOnKeyPress} ref={ref => setref(ref)} onKeyUpCapture={onKeyPress} contentEditable={isEditable}>{commandQuery}</span>
                {
                    isEditable && (<span className="blinking-cursor">_</span>) || null 
                }
            </div>
            { commandOutput && (
                    <div className="" onClick={commandOutputClickHandler} dangerouslySetInnerHTML={{__html:commandOutput}}></div>
                ) || null
            }
        </div>
    ) 
}
