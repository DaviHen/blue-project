import useFetch from './useFetch'
import BlogList from './BlogList';

const SeeBlogs = () => {
    // Destruturar os itens que recebemos. E passamos a url que queremos fazer fetch.
    // data foi mudado para blog
    const { error, isLoading, data: blogs } = useFetch('https://637a9e47702b9830b9f109b4.mockapi.io/api/blogs')

    return (
        <div className="SeeBlogs-container">
            <h1>Ver Blogs</h1>
            {/* Valores recebidos de useFetch */}
            {error && <div>{ error }</div>}
            {isLoading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}
 
export default SeeBlogs;
