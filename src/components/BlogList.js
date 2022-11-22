import {Link} from 'react-router-dom'


const BlogList = ({blogs}) => {

    return (
        <div className="SeeBlogs-content-wrapper">
            {
                blogs.map( blog => (
                    <div className="BlogPreview-container" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2 className="BlogPreview-title">{blog.title}</h2>
                            <p className="BlogPreview-author">Autor: {blog.author}</p>
                            <p className="BlogPreview-about">{blog.about}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}
 
export default BlogList;