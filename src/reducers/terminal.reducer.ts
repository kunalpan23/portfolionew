import { 
    TOGGLE_TERMINAL_MODE, 
    HANDLE_ON_COMMAND_CHANGE, 
    COMMAND_TYPE_NAME,
    COMMAND_TYPE_QUERY,
    LS_CLICK_HANDLE
} from "../actions";

import { DefaultStore, Query } from "../interfaces/interfaces";



import commandsJson from '../data/commands.json'; 
import { getQueryOutput } from "../utils";

export default {
    [TOGGLE_TERMINAL_MODE](state: DefaultStore, payload: object|any){
        return {
            ...state,
            ...payload
        }
    },
    [HANDLE_ON_COMMAND_CHANGE](state: DefaultStore, payload: object|any){
        
        switch(payload.commandType){
            case COMMAND_TYPE_NAME:{
                const commands: Query[] = getQueryOutput(state, payload);
                return {
                    ...state,
                    commands,
                    inputUser: {
                        ...state.inputUser,
                        name: payload.value
                    }
                }
            }
            case COMMAND_TYPE_QUERY:{
                const commands: Query[] = getQueryOutput(state, payload);
                
                return {
                    ...state,
                    commands
                }
            }
            default: 
            return state;
        }

    },
    [LS_CLICK_HANDLE](state:DefaultStore, payload: object|any){
        const commands = JSON.parse(JSON.stringify(state.commands));
         commands[commands.length - 1].commandQuery = payload.click;
        return {
            ...state,
            commands
        }
    }
}