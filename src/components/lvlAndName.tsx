import { useContext } from "react";
import { PlayerContext } from "../components/playerContext";
interface Chara {
    wordLvl:number;
    name: string;
    login: boolean;
    gender: string;
    lvl: number;
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
interface LvlAndNameProps {
    chara: Chara;
    setChara: (chara: Chara) => void;
    darkMode:string;
}

const LvlAndName:React.FC<LvlAndNameProps> = () => {
const context = useContext(PlayerContext)
const {chara,setChara} = context

function handleSubmit(){
    setChara({...chara, currently: "story",login:true})
}

function handleKeyPress(e:React.KeyboardEvent){
  if(e.key === 'Enter'){
   return handleSubmit()
  }
}

    return ( 
        <div>
             {chara.currently === "selectNameAndLvl" && (
            <div onKeyPress={handleKeyPress}>

            <p>choose your name and grade</p>
            <input
            type="text"
            placeholder="Name"
            onChange={(e) => setChara({...chara, name: e.target.value})}
            />
            <p>Choose a level for your goblin</p>
            <select className="select"
            onChange={(e) =>
              setChara({ ...chara, wordLvl: parseInt(e.target.value, 10) }) // Parse the value to an integer
            }>
                <option value={1}>kindergarden</option>
                <option value={2}>lvl1</option>
                <option value={3}>lvl2</option>
                <option value={4}>lvl3</option>
            </select>
            <select className="select"
            onChange={(e) => setChara({...chara, gender: e.target.value})}>
                <option value="masculine">masculine</option>
                <option value="feminine">feminine</option>
                <option value="non binary">non binary</option>
                <option value="none">choose not to pick</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
            </div>
             )}
        </div>
     );
}
 
export default LvlAndName;