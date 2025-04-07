import { useState,useContext } from "react";
import checkIfDead from "../checkIfDead";
import Fightui from "./Fightui";
import { PlayerContext } from "../playerContext";

interface Chara {
  lvl:number;
  wordLvl:number;
  chapter: number;
  currently: string;
  stats: {
    [key: string]: {
      hp: number;
      health: number;
      dmg: number;
      spd: number;
      gold: number;
    };
  };
}

interface FightProps {
  chara: Chara;
  setChara: (chara: Chara) => void;
}

export default function Fight() {

  const context = useContext(PlayerContext);
  const { chara, setChara } = context;

  const wordList ={
    1:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    2: ["aaa", "aab", "aac", "bbc", "bbd","bbf","bbg","bbh","bbi","bbj","bbk","bbl","bbm","bbn","bbo","bbp","bbq","bbr","bbs","bbt","bbu","bbv","bbw","bbx","bby","bbz","ccd","cce","ccf","ccg","cch","cci","ccj","cck","ccl","ccm","ccn","cco","ccp","ccq","ccr","ccs","cct","ccu","ccv","ccw","ccx","ccy","ccz","ddd","dde","ddf","ddg","ddh","ddi","ddj","ddk","ddl","ddm","ddn","ddo","ddp","ddq","ddr","dds","ddt","ddu","ddv","ddw","ddx","ddy","ddz","eee","eef","eeg","eeh","eei","eej","eek","eel","eem","een","eeo","eep","eeq","eer","ees","eet","eeu","eev","eew","eex","eey","eez","fff","ffg","ffh","ffi","ffj","ffk","ffl","ffm","ffn","ffo","ffp","ffq","ffr","ffs","fft","ffu","ffv","ffw","ffx","ffy","ffz","ggg","ggh","ggi","ggj","ggk","ggl","ggm","ggn","ggo","ggp","ggq","ggr","ggs","ggt","ggu","ggv","ggw","ggx","ggy","ggz","hhh","hhi","hhj","hhk","hhl","hhm","hhn","hho","hhp","hhq","hhr","hhs","hht","hhu","hhv","hhw","hhx","hhy","hhz","iii","iij","iik","iil","iim","iin","iio","iip","iiq","iir","iis","iit","iiu","iiv","iiw","iix","iiy","iiz","jjj","jjk","jjl","jjm","jjn","jjo","jjp","jjq","jjr","jjs","jjt","jju","jjv","jjw","jjx","jjy","jjz","kk"],
    3: ["hello", "world", "goodbye", "cruel", "world"],
    4: ["hello", "world", "goodbye", "cruel", "world"],
  }
  const lvlList = {
    lvl1: { hp: 3, health: 3, dmg: 1, spd: 1, gold: 1 },
    lvl2: { hp: 4, health: 4, dmg: 2, spd: 2, gold: 3 },
    lvl3: { hp: 5, health: 5, dmg: 3, spd: 3, gold: 5 },
    lvl4: { hp: 6, health: 6, dmg: 4, spd: 4, gold: 7 },
    name: ["Bob", "Frank", "Bandit", "Leeann", "Martha", "Chily"],
  };
  function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [enemyList, setEnemyList] = useState({
    lvl1: {
      name: lvlList.name[getRandomInt(0, 6)],
      stats: { ...lvlList.lvl1 },
      pic: "https://cdn.pixabay.com/photo/2024/09/05/07/56/ai-generated-9024100_1280.jpg",
    },
    lvl2: {
      name: lvlList.name[getRandomInt(0, 6)],
      stats: { ...lvlList.lvl2 },
      pic: "https://cdn.pixabay.com/photo/2024/09/05/07/56/ai-generated-9024100_1280.jpg",
    },
    lvl3: {
      name: lvlList.name[getRandomInt(0, 6)],
      stats: { ...lvlList.lvl3 },
      pic: "https://cdn.pixabay.com/photo/2024/09/05/07/56/ai-generated-9024100_1280.jpg",
    },
    lvl4: {
      name: lvlList.name[getRandomInt(0, 6)],
      stats: { ...lvlList.lvl4 },
      pic: "https://cdn.pixabay.com/photo/2024/09/05/07/56/ai-generated-9024100_1280.jpg",
    },
  });

  function typeTOAttack(){
    
    return attack();
  }

  function handleRun() {
      setChara({
        ...chara,
        chapter: chara.chapter - 1,
        currently: "story",
      })
  }

  const level = chara.lvl;
  function attack() {
    const enemyLevel = "lvl1";
    const playerSpd = chara.stats[level].spd;
    const enemySpd = enemyList[enemyLevel].stats.spd;
    const playerDmg = chara.stats[level].dmg;
    const enemyDmg = enemyList[enemyLevel].stats.dmg;
    const updatedEnemyList = { ...enemyList };

    let newEnemyHealth;
    let newPlayerHealth;

    if (playerSpd >= enemySpd) {
      newPlayerHealth = Math.max(chara.stats[level].health - enemyDmg, 0);
      newEnemyHealth = Math.max(
        updatedEnemyList[enemyLevel].stats.health - playerDmg,
        0)
    } else {
      newPlayerHealth = Math.max(chara.stats[level].health - enemyDmg, 0);
      newEnemyHealth = Math.max(
        updatedEnemyList[enemyLevel].stats.health - playerDmg,
        0
      );
    }

  
    
    updatedEnemyList[enemyLevel].stats.health = newEnemyHealth;

    setEnemyList((prevEnemyList) => ({
      ...prevEnemyList,
      lvl1: {
        ...prevEnemyList[enemyLevel],
      stats: {
        ...prevEnemyList[enemyLevel].stats,
        health: newEnemyHealth, // Update with the calculated value
      },
    },
  }));
    setTimeout(() => {
      setChara((prevChara) => ({
        ...prevChara,
        stats: {
          ...prevChara.stats,
          [prevChara.lvl]: {
            ...prevChara.stats[prevChara.lvl],
            health: newPlayerHealth,
          },
        },
        currently: "fight",
      }));
    checkIfDead({ chara, setChara, enemyList, setEnemyList });
  }, 1000);
  }
  return Fightui({handleRun, typeTOAttack, chara, setChara,  enemyList, setEnemyList, wordList });
}
