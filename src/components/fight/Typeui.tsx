import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface WordList {
  [key: number]: string[]
}
interface TypeProps {
  wordList: WordList,
  wordLvl:number,
  typeTOAttack: () => void,
  level: number
}

const Type:React.FC<TypeProps> = ({wordList,typeTOAttack, wordLvl}) => {
    const [show, setShow] = useState<boolean>(false)
    const [input, setInput] = useState<string>("")
    const [wordNumber, setWordNumber] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)
    const [timeActive, setTimeActive] = useState<boolean>(false)

  useEffect(() => {
    if (timeActive) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeActive]);


  const resetTimer = () => {
    setSeconds(0);  
    setTimeActive(false);
  };
const toggleTimer = () => {
  console.log(seconds)
  setTimeActive(!timeActive);
}
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
  toggleTimer()
    setShow(true);
  }
  
  
function handleAttack(){
  if(input == wordList[wordLvl][wordNumber]){
    console.log('correct',input,wordLvl)
    if(wordNumber < wordList[wordLvl].length-1)setWordNumber(wordNumber+1)
  typeTOAttack()
  console.log('wordNumber',wordNumber,wordLvl)
  resetTimer()
  return handleClose()
  }else{
    console.log('incorrect',input,wordLvl)
    resetTimer()
  return handleClose()
  }
}

function handleKeyPress(e:React.KeyboardEvent){
  if(e.key === 'Enter'){
   return handleAttack()
  }
}

    return ( 
      <>
      <Button variant="primary" onClick={handleShow}>
       Type to Attack
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         type this
         <h1>
           {wordList[wordLvl][wordNumber]} 
          </h1>
           to attack in...
        </Modal.Body>
        <h1>{seconds}</h1>
        <input type="text" placeholder='here' onChange={(e)=>setInput(e.target.value)} onKeyPress={handleKeyPress}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAttack}>Attack</Button>
        </Modal.Footer>
      </Modal>
    </>
     );
}
 
export default Type;