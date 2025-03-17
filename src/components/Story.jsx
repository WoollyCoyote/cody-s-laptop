const Story = ({chara,setChara}) => {
    return ( 
        <div className="gridContainer">
             {chara.currently === "story" && (
        <div>

                 <button className="flow" onClick={()=>{
                     const newChapter = parseFloat(chara.chapter) + 1;
                setChara({...chara,chapter:newChapter, currently:"fight"})
            }}>Next Fight</button>
            <div className="flow">

            <button  onClick={()=>{
                setChara({...chara, currently:"store"})
            }}>Store</button>
            </div>
            {chara.chapter === 1 && (
                <div className="flow">
                <h1>welcome</h1>
                <p>this is a journey of you, a cave goblin</p>
                </div>
              )} 
            {chara.chapter === 2 && (
    <div>
    <h1>journey to the top</h1>
    <p>fight a goblin King follower who is bullying you and youre friends</p>
    </div>
)} 
            {chara.chapter === 3 && (
                 <div>
                 <h1>Train</h1>
                 <button onClick={()=>{
                     setChara({...chara, currently:"fight"})
                    }}>Do some fighting training</button>
             </div>
)} 
  {chara.chapter === 4 && (
      <div>
     <h1>the king sends his goons</h1>
<p></p>
 </div>
)} 
  {chara.chapter === 5 && (
 <div>
 <p>make cave goblin friends</p>
     </div>
)}  
 {chara.chapter === 6 && (
     <div>
        <h1>Goblin King</h1>
    <p>time to fight the goblin king</p>
        </div>
    )} 

<button onClick={()=>{
    const newChapter = parseFloat(chara.chapter) + 1;
    setChara({...chara,chapter:newChapter, currently:"fight"})
            }}>Next</button>
        </div>
        )}
        </div>
     );
}
 
export default Story;