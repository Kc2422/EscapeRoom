import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Home = (props) => {
    
    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.setSubmitted()
        history.push("/door")
    }

    const onChangeHandler = (e) => {
        props.changeName(e.target.value)
    }


    return(
        <form onSubmit={onSubmitHandler}>
            
            
            <p>
                <label>Name</label><br/>
                <input type="text" name='name' onChange={ onChangeHandler } value = {props.name}/>
            </p>

            <input type="submit"/>
        </form>
    )
}

export default Home