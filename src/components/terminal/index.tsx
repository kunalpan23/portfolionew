import { useContext } from "react";
import { MyContext } from "../../store";
import TerminalHeaderBar from "./TerminalHeaderBar";
import Terminalbody from './Terminalbody';
export default function () {
  const [state]: any = useContext(MyContext);
  return (
    <section className="main--terminal box-border px-2">
      <div
        className={`main--terminal__container  mode__${
          state.mode ? "FULLSCREEN" : "REGULAR"
        }  rounded-xl sm:container sm:mx-auto flex flex-col`}
      >
        <TerminalHeaderBar />
        <Terminalbody />
      </div>
    </section>
  );
}
