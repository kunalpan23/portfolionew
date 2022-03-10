export type DefaultStore = {
    loading: boolean,
    mode : boolean, 
    commands: array<object>[]
}

export type Commands = {
    owerName: string,
    isEditable: boolean,
    commandQuery: string | unknown,
    commandOutput: string | unknown
}