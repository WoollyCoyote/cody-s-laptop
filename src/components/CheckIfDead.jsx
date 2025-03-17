import CheckIfLvledup from "./CheckIfLvledup";

export default function checkIfDead({
  chara,
  setChara,
  enemyList,
  setEnemyList,
}) {
  const level = chara.lvl;
  const enemyHealth = enemyList.lvl1.stats.health;
  if (enemyHealth < 1) {
    setEnemyList((prevEnemyList) => ({
      ...prevEnemyList,
      lvl1: {
        ...prevEnemyList.lvl1,
        stats: {
          ...prevEnemyList.lvl1.stats,
          health: prevEnemyList.lvl1.stats.hp,
        },
      },
    }));

    setChara((prevChara) => ({
      ...prevChara,
      currently: "story",
      stats: {
        ...prevChara.stats,
        [prevChara.lvl]: {
          ...prevChara.stats[prevChara.lvl],
          health: prevChara.stats[prevChara.lvl].hp,
        },
      },
      gold:prevChara.gold + enemyList.lvl1.stats.gold,
    }));
    CheckIfLvledup({ chara, setChara });
    return window.alert(" you knocked them out ");
  } else if (chara.stats[level].health < 1) {
    setEnemyList((prevEnemyList) => ({
      ...prevEnemyList,
      lvl1: {
        ...prevEnemyList.lvl1,
        stats: {
          ...prevEnemyList.lvl1.stats,
          health: enemyList.lvl1.stats.hp,
        },
      },
    }));
    setChara((prevChara) => ({
      ...prevChara,
      currently: "story",
      stats: {
        ...prevChara.stats,
        [prevChara.lvl]: {
          ...prevChara.stats[prevChara.lvl],
          health: prevChara.stats[prevChara.lvl].hp,
        },
      },
      gold:prevChara.gold + enemyList.lvl1.stats.gold,
    }));
    return window.alert("Oh No!, you were knocked out");
  }
}
