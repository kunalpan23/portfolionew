import { COMMAND_CAT } from "../actions";
import fileDetails from '../data/fileDetails.json';
import { getFileNotFound, getCommandNotFound } from "../utils";
import commandJson from '../data/commands.json';
type Files = {
    title: string,
    desc : string,
    pointers?: string[] | any
}

export default {
    [COMMAND_CAT](args: string[]){

        if(args.length == 1 && (commandJson as any).hasOwnProperty(args[0])) return (commandJson as any)[args[0]].help; 

        if(args.length !== 2) return getCommandNotFound(args[0]);

        if(!(fileDetails as any).hasOwnProperty(args[1])) return getFileNotFound(args[2]);

        const file: Files[] = (fileDetails as object|any)[args[1]];
        
        const commandWrapper : HTMLElement = document.createElement("div");
        
        const commandWrapperUtil: HTMLElement = document.createElement('ul');

        for(let item of file){
            const li: HTMLElement = document.createElement('li');
            li.classList.add("mt-3");

            const title: HTMLElement = document.createElement('p');
            title.classList.add('mb-1');
            title.innerHTML = item.title;

            const desc: HTMLElement = document.createElement("p");
            desc.classList.add("mb-1");
            desc.innerHTML = item.desc;

            li.appendChild(title);
            li.appendChild(desc); 

            if(item.hasOwnProperty("pointers")){
                const pointerList: HTMLElement = document.createElement("ul");
                pointerList.classList.add("pointerList", 'list-disc');
                
                for(let point of item.pointers){
                    const pointLi : HTMLElement = document.createElement("li");
                    pointLi.textContent = point;
                    pointerList.appendChild(pointLi);
                }
                li.appendChild(pointerList);
            }

            commandWrapperUtil.appendChild(li);
        }

        commandWrapper.appendChild(commandWrapperUtil);

        return commandWrapper.outerHTML;
    }
}