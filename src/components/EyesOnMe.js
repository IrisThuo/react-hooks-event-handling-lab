// Code EyesOnMe Component Here
import {useState} from 'react'


function EyesOnMe(){
 
    const [clubEyes, setclubEyes] = useState()
    function handleFocus(event){
        event.preventDefault()
       console.log("Good!")
       setclubEyes()
    }

    function handleBlur(event){
        event.preventDefault()
        console.log("Hey! eyes on me!")
        setclubEyes()
    }

    return(
        <div>
            <button id="clubEyes" onFocus={handleFocus} onBlur={handleBlur}>Eyes On Me</button>
        </div>
    )
}

export default EyesOnMe