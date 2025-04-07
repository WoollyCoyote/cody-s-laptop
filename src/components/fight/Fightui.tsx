import Player from "../Player";
import Type from "./Typeui";

interface Chara {
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

interface WordList {
  [key: number]: string[]
}

interface EnemyList {
  [key: string]: {
    name:string,
    stats:{
      hp:number,
      health:number
    }
  }
}

interface fightuiProps {
  handleRun:()=>void,
  typeTOAttack:()=>void,
  wordList:WordList,
  chara:Chara,
  setChara:()=>void,
  enemyList:EnemyList,
}

const Fightui:React.FC<fightuiProps> = ({ handleRun,typeTOAttack, wordList, chara, setChara, enemyList }) => {
  return (
    <div>
      {chara.currently === "fight" && (
        <div className="gridContainer">
          <Player chara={chara} />

          <div className="flow">
            <Type wordList={wordList} typeTOAttack={typeTOAttack} wordLvl={chara.wordLvl} />
            <button
            className="flow"
              onClick={handleRun}
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

export default Fightui;
