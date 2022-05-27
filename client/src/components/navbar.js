import styles from "./navbar.module.css"

const Navbar = (props) => {

    return (
        <div className={styles.NavBar} >
            <p>Abandoned Cabin Escape Room</p>
            {props.submitted && <p>Welcome {props.name}</p>}
        </div>
    )
}

export default Navbar