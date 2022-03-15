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

    if(commandType === "NAME"){
        commands[index].commandOutput = `Welcome, ${value}!!! <br> <span class="hint"> HINT: </span> Try typing "ls" \n and hit enter`;
    }else{
        const commandResult = verifyAndCommandOutput(value);
        commands[index].commandOutput = commandResult;
    }
    commands[index].isEditable = false;
    commands.push({...query});
    return commands;
}

export function verifyAndCommandOutput(command: string){

    if(["ls", "help-me"].includes(command)){
        return (generateHTML as any)[command](command);
    }else{
        const args: string[] = command.split(" ").length ? command.split(" ") : ["help-me"];
        const data = (generateHTML as any)[args[0]](args);
        
        return data || getCommandNotFound(args[0]); 
    }
}

export function getCommandNotFound(command: string){
    return `zsh: command not found: ${command || ""}`
}
export function getFileNotFound(fileName: string){
    return `zsh: file not found: ${fileName|| ""}`
}
