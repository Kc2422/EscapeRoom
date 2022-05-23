import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Success = (props) => {
const {haskey, name, second, minute, changeSubmitted, showSidebar} = props
const history = useHistory()
    useEffect(() => {
        changeSubmitted(false)
        showSidebar(false)
        // if(!haskey){
        //     history.push("/cheater")
        // }else{

        // }
        axios.post('http://localhost:8000/api/user', {name: `${name}`, timeTaken: `${minute} minutes ${second} seconds `})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            Congrats {name} you escaped the cabin!
            Your time was {minute} minutes and {second} seconds
        </div>
    )
}

export default Success