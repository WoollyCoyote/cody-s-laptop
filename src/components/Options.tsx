'use client'
import React, {useState, useContext} from 'react';
import  {PlayerContext, PlayerContextProps }  from './playerContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Options= () => {

    const [show, setShow] = useState<boolean>(false)
    const context = useContext<PlayerContextProps | undefined>(PlayerContext)  
  if (!context) {
    console.log(context);
    return <div>Context not available.</div>; // Handle context not being available
  }
const {chara,setChara} = context

const handleOpenClose = () => {
    setShow(!show);
}

const handleClose = () => {
    setShow(false);
}

function handleDarkMode(){
console.log(chara)
}

    return ( 
<div>
    {chara.login && (
<Button onClick={handleOpenClose} className='optionsBtn'>options</Button>
    )}
{show && (
    <div>
<Modal show={show} onHide={handleClose}>
<Button onClick={handleOpenClose}  className='flow'>close</Button>
<Button onClick={() => setChara({...chara, currently: "selectNameAndLvl"})}  className='flow'>Change name and or level</Button>
<Button onClick={() => setChara({...chara, currently: "story"})}  className='flow'>Back to story</Button>
<Button onClick={handleDarkMode}  className='flow'>Dark mode on off</Button>
</Modal>
    </div>
)}
</div>
     );
}
 
export default Options;