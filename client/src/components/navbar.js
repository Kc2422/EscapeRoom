

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    Abandoned cabin escape room
                </li>
                {props.submitted &&
                <li className="nav-item">
                    Welcome {props.name}
                </li>}
            </ul>
        </nav>
    )
}

export default Navbar