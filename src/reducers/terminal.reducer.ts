import { TOGGLE_TERMINAL_MODE } from "../actions";

export default {
    [TOGGLE_TERMINAL_MODE](state: object, payload: object|any){
        return {
            ...state,
            ...payload
        }
    }
}