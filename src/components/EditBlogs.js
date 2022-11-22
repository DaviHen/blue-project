
import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'
import {useState, useEffect} from 'react'

const EditBlogs = () => {
    
    
    const { id } = useParams();
    
    const {data: blog, error, isLoading} = useFetch("https://637a9e47702b9830b9f109b4.mockapi.io/api/blogs/" + id)
    const [title, setTitle] = useState("");
    const [contentBody, setContentBody] = useState("");
    const [author, setAuthor] = useState("");
    const [about, setAbout] = useState("");
    const [isSending, setIsSending] = useState(false);
    const history = useHistory();
    
    useEffect(() => {
        fetch("https://637a9e47702b9830b9f109b4.mockapi.io/api/blogs/" + id)
        .then( res => {
            if(!res.ok){
                throw Error("Não foi possível acessar o server")
            }
            return res.json()
        }).then( data => {
            setTitle(data.title)
            setAuthor(data.author)
            setAbout(data.about)
            setContentBody(data.contentBody)
        }).catch( e => {
            console.log(e)
        })

    }, [])



    const handleSave = (e) => {
        e.preventDefault();
        const mypost = {
            id,
            title,
            contentBody,
            author,
            about,
        }

        setIsSending(true)
        

        fetch("https://637a9e47702b9830b9f109b4.mockapi.io/api/blogs/" + id, {
            method: "PUT",
            headers: {"Content-type": 'application/json'},
            body: JSON.stringify(mypost),
        })
        .then( (res) => res.json())
        .then(() => {
            setIsSending(false)
            alert("Blog foi alterado com sucesso!")
            history.push("/")
        })
        
    }


    return (
        <div className="EditBlogs-container">
            <h2>Editar</h2>
            {isLoading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="EditBlogs-inside">

                    <form id="EditFormId" onSubmit={handleSave}>
                        <label htmlFor="EditBlogNameInput">Editar nome do blog</label>
                        <input type="text"  
                        name="EditBlogNameInput"
                        id="EditBlogNameInput" 
                        placeholder="Editar nome"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)} 
                        required
                        />
                        
                        <label htmlFor="EditBlogAuthorInput">Editar nome do autor</label>
                        <input type="text"                      
                        name="EditBlogAuthorInput"
                        id="EditBlogAuthorInput" 
                        placeholder="Editar autor"
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value)} 
                        required/>

                        <label htmlFor="EditBlogAboutInput">Editar Assunto</label>
                        <input type="text"  
                        name="EditBlogAboutInput"
                        id="EditBlogAboutInput" 
                        placeholder="Editar assunto"
                        value={about}
                        onChange={ (e) => setAbout(e.target.value)} 
                        required
                        />

                        <label htmlFor="EditTextareaInput">Editar post</label>
                        <textarea
                        type="text"  
                        name="EditTextareaInput"
                        id="EditTextareaInput"
                        placeholder="Editar blog"
                        rows="8"
                        value={contentBody}
                        onChange={ (e) => setContentBody(e.target.value)}
                        required
                        />

                        {!isSending && <button>Salvar</button>}
                        {isSending && <button disabled>Enviando...</button>}
                    </form>
                </div>
            )}
        </div>
    );
}
 
export default EditBlogs;