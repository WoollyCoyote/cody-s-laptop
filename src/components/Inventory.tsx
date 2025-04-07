"use client";
import React, { useContext } from "react";
import { PlayerContext, PlayerContextProps } from "./playerContext";

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
  showPlayer: boolean;
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

const Inventory = () => {
    const context = useContext<PlayerContextProps | undefined>(PlayerContext)  
  if (!context) {
    console.log(context);
    return <div>Context not available.</div>; // Handle context not being available
  }
const {chara,setChara} = context
  const handleRemoveItem = (index:number) => {
    setChara((prevChara:Chara) => {
      const newInventory = [...prevChara.inventory]; // Create a COPY
      newInventory.splice(index, 1); // Modify the COPY
      return {
        ...prevChara,
        stats: {
          ...prevChara.stats,
          [prevChara.lvl]: {
            ...prevChara.stats[prevChara.lvl],
            health: prevChara.stats[prevChara.lvl].health + 1,
          },
        },
        inventory: newInventory, // Update state with the new array
      };
    });
  };

  return (
    <div>
      {chara.login && (
        <button
          onClick={() => {
            return setChara({
              ...chara,
              showPlayer: !chara.showPlayer,
              show: !chara.show,
            });
          }}
        >
          {!chara.show ? "inventory" : "Close Inventory"}
        </button>
      )}

      {!chara.showPlayer && (
        <div>
          <h1>{chara.name}</h1>
          <div>
            <p>Gold:{chara.gold}</p>
            <div>
              <p>Inventory:</p>
              {chara.inventory.map((e, index) => {
                return (
                  <div key={index}>
                    <p>{e}</p>
                    <button onClick={() => handleRemoveItem(index)}>use</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
