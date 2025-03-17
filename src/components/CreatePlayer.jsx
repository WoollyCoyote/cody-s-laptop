const CreatePlayer = ({ chara, setChara }) => {
  function checkIfName(){
    if(chara.name == "" || chara.gender ==""){
      return alert("enter Goblin name and select gender")
    }
    return setChara({ ...chara, currently: "story" })
  }
  return (
    <div>
      {chara.currently === "CreatePlayer" && chara.login && (
        <div>
          
            <h1>Goblin Maker</h1>
            <input
              onChange={(e) => {
                setChara({ ...chara, name: e.target.value });
              }}
              placeholder="Goblin Name"
            />
            <label>masculine</label>
            <input value="masculine" name="gender" type="radio" className="genderBtn"  onChange={(e) => {
                setChara({ ...chara, gender: e.target.value });
              }}/>
            <label>feminine</label>
            <input value="feminine" name="gender" type="radio" className="genderBtn"  onChange={(e) => {
                setChara({ ...chara, gender: e.target.value });
              }}/>
            <label>non binary</label>
            <input value="non binary" name="gender" type="radio" className="genderBtn"  onChange={(e) => {
                setChara({ ...chara, gender: e.target.value });
              }}/>
            <button onClick={checkIfName}>
              finish Goblin
            </button>
          
        </div>
      )}
    </div>
  );
};

export default CreatePlayer;
