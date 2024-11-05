import { useLoaderData, useNavigate } from "react-router-dom";


const PostDtl = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    const {id,body,title}=post
    const handleGoback= ()=>{
navigate(-1)
    }
   
    return (
        <div>
            <h1>Post details about :{id} </h1>
            <p>Title : {title}</p>
            <p><small>{body}</small></p>

            <button onClick={handleGoback}>Go Back</button>
        </div>
    );
};

export default PostDtl;