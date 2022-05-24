import React, { useState, useEffect } from 'react';

const Keypad = (props) => {
    const buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, "" , 0, ""]
    return (
        <div>
            <img className="keypad position-absolute top-50 start-50 translate-middle" src={require('../img/KeyPadCloseUp.png')} alt="background" />
            {/* <div className="position-relative"> */}
            <h1></h1>
            <h1 className="word position-absolute top-0 start-50 translate-middle">4562</h1>
            <div>
                <div className="position-absolute top-0 start-0">1</div>
                <div className="position-absolute top-0 start-50 translate-middle-x">2</div>
                <div className="position-absolute top-0 start-50 translate-middle-x">3</div>
                <div className="position-absolute top-0 start-50 translate-middle-x">4</div>
                <div className="position-absolute top-0 start-50 translate-middle-x">5</div>
                <div className="position-absolute top-0 start-50 translate-middle-x">6</div>
                <div className="position-absolute top-0 start-50 translate-middle-x">7</div>
                <div className="position-absolute top-0 start-50 translate-middle-x">8</div>
                <div className="position-absolute top-0 start-50 translate-middle-x">9</div>
            </div>


            {/* </div> */}

        </div>
    );
}

export default Keypad;
