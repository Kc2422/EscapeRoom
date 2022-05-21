import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import styles from "./Home.module.css"

const Home = (props) => {
    
    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.setSubmitted(true)
        props.showSidebar(true)
        history.push("/door")
    }

    const onChangeHandler = (e) => {
        props.changeName(e.target.value)
    }

    useEffect(() => {
        props.setSubmitted(false)
    }, [])

    useEffect(() => {
        props.showSidebar(false)
    })

    


    return(
        <div className={styles.nameForm}>

        <form onSubmit={onSubmitHandler}>
            
            
            <p>
                <label>Enter your name:</label><br/>
                <input type="text" name='name' onChange={ onChangeHandler } value = {props.name}/>
            </p>

            <input type="submit" className='btn btn-success'/>
        </form>
        </div>
    )
}

export default Home