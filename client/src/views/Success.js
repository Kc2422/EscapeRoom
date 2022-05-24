import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, Link } from 'react-router-dom';

const Success = (props) => {
    const { haskey, name, second, minute, changeSubmitted, showSidebar } = props
    const history = useHistory()
    useEffect(() => {
        changeSubmitted(false)
        showSidebar(false)
        // if(!haskey){
        //     history.push("/cheater")
        // }else{

        // }

    }, [])

    return (
        <div className='success'>
            <div className='greenbox'>

            <h1>
                Congratulations {name} you escaped the cabin!
            </h1>
            <p>
                Your time was {minute} minutes and {second} seconds
            </p>
            <p >
                <Link to="/times" className='btn btn-success' >See best times</Link>
            </p>

            <Link to="/" className='btn btn-primary'>Play again</Link>
            </div>


        </div>
    )
}

export default Success