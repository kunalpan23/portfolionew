import { COMMAND_DESCRIPTION, COMMAND_HELP_ME } from "../actions";
import lsCommand from "./ls.command";
import catCommand from "./cat.command";

export default {
    ...lsCommand,
    [COMMAND_DESCRIPTION]: function(args: []){

    },
    [COMMAND_HELP_ME]: function (args: []){

    },
    ...catCommand
}