import { useLoaderData } from "react-router-dom";

const UserDtl = () => {
    const user = useLoaderData();
    const {name}= user
    return (
        <div>
            <h2>Details about users {name} </h2>
        </div>
    );
};

export default UserDtl;