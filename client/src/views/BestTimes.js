import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, Link } from 'react-router-dom';
import bgImage from '../files/movingwoods.mp4';

const BestTimes = (props) => {
    const [fastestTimes, setFastestTimes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(res => {setFastestTimes(res.data); console.log(res)})
        .catch(err => {console.log(err)})
    },[])

    useEffect(() => {
        props.changeSubmitted(false)
        props.showSidebar(false)
        // if(!haskey){
        //     history.push("/cheater")
        // }else{

        // }

    }, [])

    return(
        <>
            <video className="bgVideo" autoPlay loop muted>
                <source src={bgImage} type="video/mp4"/>
            </video>
        <div className='timesPage'>
        <h1 className='best'>Best times</h1>
            <span className='padding'>

            <a href="/" className='btn btn-success btnwidth'>Play again</a>
            </span>
        
        <table className='table table-bordered w-auto backgroundTable'>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Time</th>
                
        
            </tr>
        </thead>
        <tbody>
            {fastestTimes.map((item, i) => 
            <tr>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.timeTaken}</td>
            </tr>)}
        </tbody>
        </table>
        </div>
        </>
        
    )
}

export default BestTimes