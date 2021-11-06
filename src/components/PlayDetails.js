/**
* The general data flow of the "Play Details" view is as follows:
* 1. If the selected play has characters and text, that Play object is retrieved and set to the playInfo hook.
*      - The hasPlayInfo hook is then set to "true"; if hasPlayInfo is false, the Characters and Text tabs will disappear.
* 
* 2. The textSelection hook is filled with default data; that is, ACT I, SCENE I, and allPlayers.
*      - textSelection is an object that contains the user's selected act, scene, and speaker, with each stored as a string.
*      - Not to be confused with textTabSelected, which is an unrelated boolean stating if the user is in the "Text" tab.
*
* 3. The details for the selected play are rendered, and textSelection is passed as a prop to the PlayDetailTabs and 
*    PlayTextSearch components.
*      - PlayDetailTabs is the component that contains the "Details", "Characters", and "Text" tabs. The "Text" tab shows the
*        play's script for the currently selected act, scene, and speaker (or all speakers, if that's what's selected).
*      - PlayTextSearch contains the dropdown menus to select different acts/scenes/speakers. Whenever one of these menus
*        is changed, setTextSelection is called to update the new chosen act/scene/speaker, and PlayDetailTabs is re-rendered
*        to reflect those changes.
*
* 4. When rendering the "Text" tab, the selected act, scene, and speaker will propogate down to each component in this order:
*    PlayDetailTabs > PlayText > PlayAct > PlayScene > PlaySpeech
*      - PlayDetailTabs could be considered the highest level component in this hierarchy, since it contains our playInfo and
*        textSelection hooks. These hooks are passed as props to the above components so that each act, scene, and speech can
*        be rendered according to the user's selection.
*/
import React, { useEffect, useState } from "react";
import PlayGeneralInfo from "./PlayGeneralInfo";
import PlayDetailTabs from "./PlayDetailTabs";
import PlayTextSearch from "./PlayTextSearch";

const PlayDetails = (props) => {
  const [playInfo, setPlayInfo] = useState({});
  const [hasPlayInfo, setHasPlayInfo] = useState(false);

  const [textTabSelected, setTextTabSelected] = useState(false);
  const [textSelection, setTextSelection] = useState({});

  useEffect(() => {
    const getData = async () => {
      if (!localStorage.getItem(props.play.id)) { // if not in localstorage
        if (props.play.filename != "") { // if play has characters & text
          const url = `https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=${props.play.id}`;
          const response = await fetch(url);
          const data = await response.json();
          console.log("api data: " + data);
          setPlayInfo(data);
          setTextSelection({
            act: data.acts[0].name,
            scene: data.acts[0].scenes[0].name,
            char: "allPlayers",
          });
          setHasPlayInfo(true);
          localStorage.setItem(props.play.id, JSON.stringify(data));
        }
      } else {
        const data = JSON.parse(localStorage.getItem(props.play.id));
        setPlayInfo(data);
        setTextSelection({
          act: data.acts[0].name,
          scene: data.acts[0].scenes[0].name,
          char: "allPlayers",
        });
        setHasPlayInfo(true);
      }
    };
    getData();
  }, []);

  return (
    <div className={props.showFavs ? "details-panel-shrink" : "details-panel"}>
      {/* if open detail tab is "text", display textsearch instead of PlayGeneralInfo */}
      {textTabSelected ? (
        <PlayTextSearch
          play={props.play}
          playInfo={playInfo}
          viewPlay={props.viewPlay}
          favoritePlay={props.favoritePlay}
          textSelection={textSelection}
          setTextSelection={setTextSelection}
        />
      ) : (
        <PlayGeneralInfo
          play={props.play}
          viewPlay={props.viewPlay}
          favoritePlay={props.favoritePlay}
        />
      )}
      <PlayDetailTabs
        play={props.play}
        playInfo={playInfo}
        hasPlayInfo={hasPlayInfo}
        textSelection={textSelection}
        setTextSelection={setTextSelection}
        setTextTabSelected={setTextTabSelected}
      />
    </div>
  );
};

export default PlayDetails;