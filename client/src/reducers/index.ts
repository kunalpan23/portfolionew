import terminalReducer  from "./terminal.reducer";

const combinedReducer: any = {
    ...terminalReducer
}

export default function Reducer(state: object,{ type, payload }: object| any){
    const reducer = combinedReducer[type];
    if(!reducer){
        console.error(type,"  <= is not a reducer")
        return {};
    }

    return reducer(state, payload);
}