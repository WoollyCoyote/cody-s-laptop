import { useState } from "react";
import checkIfDead from "../checkIfDead";
import fightui from "./fightui";

export default function Fight({ chara, setChara }) {
  const lvlList = {
    lvl1: { hp: 3, health: 3, dmg: 1, spd: 1, gold: 1 },
    lvl2: { hp: 4, health: 4, dmg: 2, spd: 2, gold: 3 },
    lvl3: { hp: 5, health: 5, dmg: 3, spd: 3, gold: 5 },
    lvl4: { hp: 6, health: 6, dmg: 4, spd: 4, gold: 7 },
    name: ["Bob", "Frank", "Bandit", "Leeann", "Martha", "Chily"],
  };
  function getRandomInt(min, max) {
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

  function attack() {
    const level = chara.lvl;
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
  return fightui({ attack, chara, setChara, enemyList, setEnemyList });
}
