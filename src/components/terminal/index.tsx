import { useContext } from "react";
import { MyContext } from "../../store";
import TerminalHeaderBar from "./TerminalHeaderBar";
import Terminalbody from './Terminalbody';
export default function () {
  const [state]: any = useContext(MyContext);
  return (
    <section className="main--terminal box-border px-2">
      <TerminalHeaderBar />
	  <Terminalbody />
    </section>
  );
}
