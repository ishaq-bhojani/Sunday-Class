import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const [posts, setPosts] = useState([]);
    useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json();
        setPosts(json);
    });
    const data = posts.map(post => {
        return (<div>
            Title: {post.title}, Body: {post.body}
        </div>)
    })
    return (<div>About
        {data}
    </div>)
};

export default About;