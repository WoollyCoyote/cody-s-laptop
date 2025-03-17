"use client";
import { useState } from "react";
// import Player from "./Player";
import CreatePlayer from "./CreatePlayer";
import Fight from "./fight/fight";
import Story from "./Story";
import Login from "./Login";
import Inventory from "./inventory";
import Store from "./Store";

const Title = () => {

  const [chara, setChara] = useState({
    email:"",
    login: false,
    gender:"",
    name:"", 
    show: false,
    
    chapter: 1,
    lvl:1,
    exp: 0,
    stats:{
    1:{ lvl: 1, hp: 3, health: 3, dmg: 1, spd: 1 },
    2:{ lvl: 2, hp: 4, health: 4, dmg: 2, spd: 2 },
    3:{ lvl: 3, hp: 5, health: 5, dmg: 3, spd: 3 },
    4:{ lvl: 4, hp: 6, health: 6, dmg: 4, spd: 4 },
  },
    prevCurrently:"",
    currently: "CreatePlayer",
    showPlayer: "false",
    equipped: {
      "Head": "",
      "Chest":"dirty old shirt",
      "Pants":"old stained ripped shorts",
      "Gloves":"",
      "Boots":"",
      "Back":"",
      "Backpack":"",
    },
    gold:0,
    inventory: [],
  })



  return (
    <div >
      <CreatePlayer chara={chara} setChara={setChara}/>
      <Login chara={chara} setChara={setChara} />
      <Story chara={chara} setChara={setChara} />
      <Fight chara={chara} setChara={setChara}/>
      <Inventory setChara={setChara} chara={chara}/>
      <Store chara={chara} setChara={setChara}/>
    </div>
  );
};

export default Title;
