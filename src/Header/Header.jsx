import '../Components/HeaderCss/header.css'

import { Link } from 'react-router-dom'; 
const Header = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <nav>
               
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Users">Users</Link>
             
            </nav>
        </div>
    );
};

export default Header;