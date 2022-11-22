import { useHistory, useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import useFetch from './useFetch'

const EnterBlogs = () => {
    // Pegamos o id dos parametros
    const { id } = useParams();

    const {data: blog, error, isLoading} = useFetch("https://637a9e47702b9830b9f109b4.mockapi.io/api/blogs/" + id)

    // Pegar historico para redirecionar depois de deletar
    const history = useHistory();

    const handleDelete = () => {

        if(window.confirm("Você quer mesmo deletar este blog?") === true){
            fetch("https://637a9e47702b9830b9f109b4.mockapi.io/api/blogs/" + id, {
                method: "DELETE",
            }).then(() => {
                history.push("/")
            })
        }
    }

    return (
        <div className="EnterBlogs-container">
            {isLoading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="Blogs-inside">
                    <h2>{blog.title}</h2>
                    <p>Autor do Blog: {blog.author}</p>
                    <div><p>{blog.contentBody}</p></div>
                    <button onClick={handleDelete} className="EnterBlogs-DeleteBtn">Deletar Blog</button>

                    <Link to={`/editblogs/${blog.id}`} className="EnterBlogs-EditBtn">Editar Blog</Link>
                </div>
            )}
        </div>
    );
}
 
export default EnterBlogs;