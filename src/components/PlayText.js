import React from "react";
import PlayAct from "./PlayAct";

const PlayText = (props) => {
  if (props.textSelection.act === "ACT I") 
    return <PlayAct act={props.text.acts[0]} scene={props.textSelection.scene} textSelection={props.textSelection}/>;
  else if (props.textSelection.act === "ACT II")
    return <PlayAct act={props.text.acts[1]} scene={props.textSelection.scene} textSelection={props.textSelection}/>;
  else if (props.textSelection.act === "ACT III")
    return <PlayAct act={props.text.acts[2]} scene={props.textSelection.scene} textSelection={props.textSelection}/>;
};

export default PlayText;
