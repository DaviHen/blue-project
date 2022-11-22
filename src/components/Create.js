import {useState} from 'react';

const Create = () => {

    const [title, setTitle] = useState('');
    const [contentBody, setContentBody] = useState('');
    const [author, setAuthor] = useState('');
    const [about, setAbout] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, contentBody, author, about};

        setIsSending(true);

        // Enviar para Json server
        fetch("https://637a9e47702b9830b9f109b4.mockapi.io/api/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            // Esta função corre quando tudo acaba
            alert("Blog enviado")
            setTitle("")
            setContentBody("")
            setAuthor("")
            setAbout("")
            setIsSending(false)
        })
    }


    return (
        <div className="Create-container">
            <h2>Criar Blogs</h2>
            <form id="FormId" onSubmit={handleSubmit}>
                <label htmlFor="BlogNameInput">Digite o nome do blog</label>
                <input 
                type="text"
                name="BlogNameInput"
                id="BlogNameInput" 
                placeholder="Ex: Blog Bacana"
                value={title} 
                onChange={ (e) => setTitle(e.target.value)} 
                required/>

                <label htmlFor="authorInput">Digite o nome do autor</label>
                <input type="text"
                name="authorInput"
                id="authorInput"
                placeholder="Ex: João e Maria"
                value={author}
                onChange={ (e) => setAuthor(e.target.value)}
                required/>

                <label htmlFor="aboutInput">Digite algo sobre</label>
                <input 
                type="text"
                name="aboutInput"
                id="aboutInput"
                placeholder="Ex: Um blog que fala sobre as curiosidades da vida de um cachorro."
                value={about}
                onChange={ (e) => setAbout(e.target.value)}
                required />

                <label htmlFor="textareaInput">Sua postagem:</label>
                <textarea 
                name="textareaInput"
                id="textareaInput"
                placeholder="Ex: Lorem ipsum dolor sit amet..."
                rows="8"
                value={contentBody}
                onChange={ (e) => setContentBody(e.target.value)}
                required
                ></textarea>

                {!isSending && <button>Enviar</button>}
                {isSending && <button disabled>Enviando...</button>}
            </form>
        </div>
    );
}
 
export default Create;