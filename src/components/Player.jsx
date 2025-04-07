
const Player = ({ chara}) => {
  let lvl = chara.lvl;
  let health = chara.stats[lvl].health;
  let hp = chara.stats[lvl].hp;

  return (
    <div>    
      
          <p>Level:{lvl}</p>
          <p>
          player health is- {health} out of {hp}
          </p>
       
    
    </div>
  );
};

export default Player;
