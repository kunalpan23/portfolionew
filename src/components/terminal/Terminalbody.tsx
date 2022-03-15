import { useContext } from "react"
import { MyContext } from "../../store"
import { Query } from '../../interfaces/interfaces';
import CommandLine from "../commandLine";

import { COMMAND_TYPE_NAME, COMMAND_TYPE_QUERY } from "../../actions";

export default function Terminalbody() {
    const [state, dispatch]: any = useContext(MyContext);
    const prefixCommand = "Try typing your name >"
    return (
        <div className="flex flex-1 flex-col overflow-y-auto">
            {
                state.commands.map((item: Query, index: number) => {
                    return (
                        <CommandLine 
                            key={`${item.commandQuery}_${index}`}
                            commandPrefix={index == 0 ? prefixCommand: `${state.inputUser.name}@terminal >`}
                            isEditable={item.isEditable}
                            commandQuery={item.commandQuery}
                            commandOutput={item.commandOutput}
                            commandType={index === 0 ? COMMAND_TYPE_NAME : COMMAND_TYPE_QUERY}
                            dispatch={dispatch}
                            index={index}
                        />
                    )
                })
            }
        </div>
    )
}
