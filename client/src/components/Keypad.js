import React, { useState, useEffect } from 'react';

const Keypad = (props) => {
    const [code, setCode] = useState("")
    const [safeOpen, setSafeOpen] = useState(false)

    const onSubmitCode = (e) => {
        e.preventDefault()
        if(code === "1234"){
            setSafeOpen(true)
        }else{
            props.addMessage("The safe won't open")
        }
    }
    return (
        <div>
            <img className="keypad position-absolute top-50 start-50 translate-middle" src={require('../img/KeyPadCloseUp.png')} alt="background" />

            <h1 className="word position-absolute top-0 start-50 translate-middle">4562</h1>
             <form onSubmit = {onSubmitCode} className="position-absolute top-0 start-50 translate-middle">
                <input type="text" maxLength="4"onChange={(e) => {setCode(e.target.value)}}/>
            </form>


        </div>
    );
}

export default Keypad;
