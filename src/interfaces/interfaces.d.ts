export interface InputUser {
    name: string;
}

export type DefaultStore = {
    loading: boolean,
    mode : boolean, 
    commands: array<object>[],
    inputUser: InputUser
}

export type Query = {
    owerName: string,
    isEditable: boolean,
    commandQuery: string ,
    commandOutput: string,
    commandType : string 
}

export interface QueryProps {
    commandPrefix?: string;
    isEditable?: boolean;
    commandQuery?: string; 
    commandOutput?: string;
    commandType?: string;
    dispatch: Function;
    index: number
}