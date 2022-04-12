import { query } from "../defaults/defaultStore";
import { DefaultStore } from "../interfaces/interfaces";
import generateHTML from '../generate';

export function customOnClick(e: any, className: string ,callBack: Function){
    let el = e.target;
    while (el && el !== e.currentTarget && !el.classList.contains(className)) {
        el = el.parentNode;
    }
    if (el && el.classList.contains(className)) {
        callBack && callBack(e);
    }
}

export function dispatchHandler(dispatch:any){
    return function dispatcher(type: string, payload: object|null = null) {
        return dispatch({type, payload});
    }
}

export function getQueryOutput(state: DefaultStore, payload: Object| unknown){
    const { index, commandType, value}: any  = payload;
    const { commands } = state;

    if(["NAME"].includes(commandType)){
        commands[index].commandOutput = `Welcome, ${value}!!! <br> <span class="hint"> HINT: </span> Try typing "ls" \n and hit enter`;
        commands[index].isEditable = false;
    }else if(["clear"].includes(value)){
        commands.length = 0 ;
    }else{
        const commandResult = verifyAndCommandOutput(value);
        commands[index].commandOutput = commandResult;
        commands[index].isEditable = false;
    }
    
    commands.push({...query});
    return commands;
}

export function verifyAndCommandOutput(command: string){

    if(["ls", "help-me"].includes(command)){
        return (generateHTML as any)[command](command);
    }else{
        const args: string[] = command.split(" ").length ? command.split(" ") : ["help-me"];

        return (generateHTML as any).hasOwnProperty(args[0]) && (generateHTML as any)[args[0]](args) || getCommandNotFound(args[0]); 
    }
}

export function getCommandNotFound(command: string){
    return `zsh: command not found: ${command || ""}`
}
export function getFileNotFound(fileName: string){
    return `zsh: file not found: ${fileName|| ""}`
}

export function getSelectionCharacterOffsetWithin(element: any) {
    let start = 0;
    let end = 0;
    const doc: any = element.ownerDocument || element.document;
    const win = doc.defaultView || doc.parentWindow;
    let sel;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            const range = win.getSelection().getRangeAt(0);
            let preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.startContainer, range.startOffset);
            start = preCaretRange.toString().length;
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            end = preCaretRange.toString().length;
        }
    } else if ( (sel = (doc as any).selection) && sel.type != "Control") {
        const textRange = sel.createRange();
        const preCaretTextRange = (doc.body as any).createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToStart", textRange);
        start = preCaretTextRange.text.length;
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        end = preCaretTextRange.text.length;
    }
    return { start: start, end: end };
}

export const placeCaretAtEnd = (el:any) => {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel:any = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof (document.body as any).createTextRange != "undefined") {
        const textRange: any = (document.body as any).createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

export const getCaretCoordinates = () => {
    let x = 0,
      y = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
      const selection = window.getSelection();
      if ((selection as any).rangeCount !== 0) {
        const range = (selection as any).getRangeAt(0).cloneRange();
        range.collapse(true);
        const rect = range.getClientRects()[0];
        if (rect) {
          x = rect.left;
          y = rect.top;
        }
      }
    }
    return { x, y };
  }