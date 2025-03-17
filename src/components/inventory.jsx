const Inventory = ({ chara, setChara }) => {
 
  const handleRemoveItem = (index) => {
    setChara((prevChara) => {
      const newInventory = [...prevChara.inventory]; // Create a COPY
      newInventory.splice(index, 1); // Modify the COPY
      return {
        ...prevChara,
        stats:{
          ...prevChara.stats,
        [prevChara.lvl]:{
          ...prevChara.stats[prevChara.lvl],
          health: prevChara.stats[prevChara.lvl].health + 1,}
        },
        inventory: newInventory, // Update state with the new array
      };
    });
  };


  return (
    <div>
      {chara.login && chara.name && (
        <button
          onClick={() => {
            return setChara({
              ...chara,
              showPlayer: !chara.showPlayer,
              show: !chara.show,
            });
          }}
        >
          {!chara.show
            ? "inventory"
            : "Close Inventory"}
        </button>
      )}

      {!chara.showPlayer && (
        <div>
          <h1>{chara.name}</h1>
          <div>
            <p>Gold:{chara.gold}</p>
            <div>
            <p>Inventory:</p>
              {chara.inventory.map((e,index)=>{
              return <div key={index}><p>{e}</p><button onClick={()=> handleRemoveItem(index)}>use</button></div>
            })}
            </div>
          </div>
    </div>
      )}
    </div>
  );
};

export default Inventory;
