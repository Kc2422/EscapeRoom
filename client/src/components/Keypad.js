import React, { useState, useEffect } from 'react';

const Keypad = (props) => {

    return (
        <div>
            <img className="keypad position-absolute top-50 start-50 translate-middle" src={require('../img/KeyPadCloseUp.png')} alt="background" />

            <h1 className="word position-absolute top-0 start-50 translate-middle">4562</h1>


        </div>
    );
}

export default Keypad;
