import Inventory from "./inventory";

const Player = ({ chara,setChara}) => {
  let lvl = chara.lvl;
  let health = chara.stats[lvl].health;
  let hp = chara.stats[lvl].hp;

  return (
    <div>    
      
          <p>Level:{lvl}</p>
          <p>
          player health is- {health} out of {hp}
          </p>
      <Inventory setChara={setChara} chara={chara}/>
       
    
    </div>
  );
};

export default Player;
