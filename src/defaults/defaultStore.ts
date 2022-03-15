import {DefaultStore, Query} from "../interfaces/interfaces";

export const query: Query = {
    owerName: "kunalpanchal",
    isEditable: true,
    commandQuery: "",
    commandOutput: "",
    commandType : ""
}

export const userNameQuery: Query = {
    ...query,
    owerName : ""
}

export const defaultStore:DefaultStore = {
	loading: true,
    mode: false, 
    commands: [userNameQuery],
    inputUser: {
        name: ""
    }
};

