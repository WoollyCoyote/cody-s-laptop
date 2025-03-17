import Player from "../Player";

const fightUI = ({ attack, chara, setChara, enemyList }) => {
  return (
    <div>
      {chara.currently === "fight" && (
        <div className="gridContainer">
          <Player chara={chara} setChara={setChara} className="col-sm" />

          <div className="flow">
            <button onClick={attack}>attack</button>{" "}
            <button
            className="flow"
              onClick={() =>
                setChara({
                  ...chara,
                  chapter: chara.chapter - 1,
                  currently: "story",
                })
              }
            >
              run
            </button>
          </div>
          <div className="flow">
            <p>{enemyList.lvl1.name}</p>
            <p>{`health is- ${enemyList.lvl1.stats.health} out of ${enemyList.lvl1.stats.hp}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default fightUI;
