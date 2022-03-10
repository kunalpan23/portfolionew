
export function dispatchHandler(dispatch:any){
    return function dispatcher(type: string, payload: object|null = null) {
        return dispatch({type, payload});
    }
}