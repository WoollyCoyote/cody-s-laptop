const Login = ({ chara, setChara }) => {
  function getGoblinData(){
return setChara({ ...chara, login: true })
  }
 function checkIfEmailisIn(){
if(chara.email==""){
  return alert("enter Email")
}
if(chara.email.includes("@")) {
 return setChara({ ...chara, login: true })
}
  return alert("invaid Email")
  }
  return (
    <div>

    {!chara.login && (
      <div>
      <h1>Welcome to Goblin Wars</h1>
      <div>
      <button onClick={getGoblinData}
      >Login</button>
          <input onChange={(e)=>setChara({...chara, email:e.target.value})} placeholder="Email"/>
      </div>
      <div>
      <button onClick={checkIfEmailisIn}
      >Create Account</button>
          <input onChange={(e)=>setChara({...chara, email:e.target.value})} placeholder="Email"/>
      </div>
          <button onClick={() => setChara({ ...chara, email:"guest", name:"Fred",gender:"masculine", login: true, currently:"story" })}>
            Guest mode
          </button>
        </div>
      )}
      </div>
  );
};

export default Login;
