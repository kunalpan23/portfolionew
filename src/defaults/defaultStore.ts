import {DefaultStore, Commands} from "../interfaces/interfaces";

export const defaultCommand: Commands = {
    owerName: "kunalpanchal",
    isEditable: true,
    commandQuery: "",
    commandOutput: ""
}

export const defaultStore:DefaultStore = {
	loading: true,
    mode: false, 
    commands: [defaultCommand]
};

