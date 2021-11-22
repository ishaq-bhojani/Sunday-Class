import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: "GET"
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => setData(json));
    }, []);

    return (<div>
        {data && <div>
            userId: {data.userId},
            title: {data.title},
            completed: {data.completed}
        </div>}
        <div><Link to="/about">About</Link></div>
        <div><Link to="/invoices/123">My Invoice</Link></div>
    </div>)
};

export default Home;