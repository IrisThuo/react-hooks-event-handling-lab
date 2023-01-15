// Code Keypad Component Here
import {useState} from 'react'


function Keypad (){
    const [passcode ,setPasscode] = useState("")
    function handleClick(event){
            event.preventDefault()
        console.log('Entering password...')
        setPasscode('Entering password...')
        
       
    }
    return (
        <div>
            <form >
                <label htmlFor="passcode">Passcode</label>
            <input type="text" id="passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)}/>
            <button onClick={handleClick}>ENTER</button>
            </form>
        </div>
    )
}

export default Keypad;