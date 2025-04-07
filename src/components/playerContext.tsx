'use client';
import React, {useState, createContext, ReactNode} from 'react'

interface Chara {
    email: string;
    login: boolean;
    gender: string;
    name: string;
    show: boolean;
    wordLvl: number;
    chapter: number;
    lvl: number;
    exp: number;
    stats: {
      [key: string]: {
        lvl: number;
        hp: number;
        health: number;
        dmg: number;
        spd: number;
      };
    };
    prevCurrently: string;
    currently: string;
    showPlayer: string;
    equipped: {
      Head: string;
      Chest: string;
      Pants: string;
      Gloves: string;
      Boots: string;
      Back: string;
      Backpack: string;
    };
    gold: number;
    inventory: string[];
  }

export interface PlayerContextProps {
    chara: Chara;
    setChara: (chara: Chara) => void;
    children:ReactNode;
}

export const PlayerContext = createContext<PlayerContextProps | undefined>(undefined)

export const PlayerContextFunction:React.FC<{children:React.ReactNode}> = ({children}) => {

    const [chara, setChara] = useState<Chara>({
        email:"",
        login: false,
        gender:"",
        name:"", 
        show: false,
        wordLvl: 1,
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
        currently: "selectNameAndLvl",
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
<PlayerContext.Provider value={{chara, setChara,children}}>
{children}
</PlayerContext.Provider>
     );
}
 

export default PlayerContextFunction;