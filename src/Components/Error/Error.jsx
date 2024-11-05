import { useAsyncError } from "react-router-dom";


const Error = () => {
    const error = useAsyncError();
    return (
        <div>
            <h1>opps!!⛓️‍💥</h1>
           
          
        </div>
    );
};

export default Error;