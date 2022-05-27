import "../CSS/Navbar.css"

const Navbar = (props) => {

    return (
        <div className="NavBar" >
            <p>Abandoned Cabin Escape Room</p>
            {props.submitted && <p>Welcome {props.name}</p>}
        </div>
    )
}

export default Navbar