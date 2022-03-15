import {PropsWithChildren} from 'react'
import { HANDLE_ON_COMMAND_CHANGE, HANDLE_ON_COMMAND_HIT, LS_CLICK_HANDLE } from '../../actions';
import { QueryProps } from '../../interfaces/interfaces';

import { customOnClick } from '../../utils';

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
    return (
        <div className={`terminal-command-wrap pl-2 pt-3`} onClick={() => inputRef?.focus()}>
            <div className="command">
                <span className="prefix-command mr-2">{commandPrefix}</span>
                <span className="text-command" suppressContentEditableWarning={true} ref={ref => (ref && isEditable && ref.focus(), (inputRef = ref))} onKeyUpCapture={onKeyPress} contentEditable={isEditable}>{commandQuery}</span>
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
