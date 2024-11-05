import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()

    return (
        <div>
            <h1>Users:{users.length}</h1>
            <div>
                {
                  users.map(user=> <User user={user} key={user.id}></User>)  
                }
            </div>
            
        </div>
    );
};

export default Users;