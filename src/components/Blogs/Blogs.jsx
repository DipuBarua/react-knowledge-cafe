import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div>
            <h1>this is blogs</h1>
            {/* {blogs.map((blog,id)=><img key={id} src={blog?.cover} alt="" />)} */}
        </div>
    );
};

export default Blogs;