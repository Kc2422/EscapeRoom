import "../CSS/Navbar.css"

const Navbar = (props) => {

    return (
        <div className="NavBar" >
            Abandoned Cabin Escape Room
            
            {props.submitted && <p>Welcome {props.name}</p>}
        </div>
    )
}

export default Navbar