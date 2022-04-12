import { COMMAND_LISTING } from "../actions";
import commandJson from '../data/commands.json';

export default {
    [COMMAND_LISTING]: function(args: string){

        const { list = []} = (commandJson as object|any)[args];
        const commandWrapper: HTMLElement = document.createElement("div");
        commandWrapper.classList.add("files--list");

        const listconatiner: HTMLElement = document.createElement("ul");
        listconatiner.classList.add("list--container", "md:w-7/12", "flex", "flex-wrap");
        for(let item of list){
            const li : HTMLElement = document.createElement("li");
            li.classList.add("list--container__block", "flex", "shrink-0", "mr-8", "mt-4", "w-32");
            
            const label : HTMLSpanElement = document.createElement("span");
            label.classList.add("list--conatiner__block-label", "cursor-pointer", "hover:underline"); 
            label.textContent = item.filename;
            label.setAttribute("key", JSON.stringify(item));

            li.appendChild(label);
            listconatiner.appendChild(li);
        }
        const commandHint = document.createElement("div");
        commandHint.classList.add("mt-2");
        commandHint.innerHTML = `<span class="hint">HINT:</span> click item and hit enter`;


        commandWrapper.appendChild(listconatiner);
        commandWrapper.appendChild(commandHint);

        return commandWrapper.outerHTML;
    }
}