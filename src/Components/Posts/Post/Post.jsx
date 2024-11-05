import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title}= post
    const navigate = useNavigate()

    const handlepost =()=>{
navigate(`/post/${id}`)
    }
    return (
        <div  className="pp">
            <h4>Post of id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handlepost}> Post Details</button>

        </div>
    );
};

export default Post;