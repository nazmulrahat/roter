import { Link } from "react-router-dom";


const User = ({user}) => {
  
    const {name,email,phone,id}=user
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;