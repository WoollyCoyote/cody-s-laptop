
const Store = ({chara, setChara}) => {
    function buy (item){
        if(chara.gold < 1){
            alert("not enough gold")
            return
          }
        setChara({...chara,
            inventory: [...chara.inventory, item],
            gold: chara.gold - 1
          })
          console.log(chara.inventory)
    }
    return ( 
        <div>
             {chara.currently === "store" && (
      <div>
            <h1>Welcome to the Store</h1>
      <button onClick={()=>buy("potion")}>Buy Potion</button>
            <button onClick={
                ()=>{
                setChara({...chara, currently:"story"})
            }}>Back to Story</button>
            </div>
        )} 
        </div>
     );
}
 
export default Store;