import '../Components/HeaderCss/header.css'

import { NavLink } from 'react-router-dom'; 
const Header = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <nav>
               
             
                <NavLink  to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                <NavLink to="/Users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
             
            </nav>
        </div>
    );
};

export default Header;