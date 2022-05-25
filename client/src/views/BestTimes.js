import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, Link } from 'react-router-dom';

const BestTimes = (props) => {
    const [fastestTimes, setFastestTimes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(res => {setFastestTimes(res.data); console.log(res)})
        .catch(err => {console.log(err)})
    },[])

    return(
        <div className='padding'>
        <h1 className='best'>Best times</h1>
        
        <table className='table table-bordered table-hover table-success'>
        <thead>
            <tr>
                <th>#</th>
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
        <a href="/" className='btn btn-success'>Play again</a>
        </div>
        
    )
}

export default BestTimes