import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="NotFound-container">
            <div className="NotFound-content-wrapper">
                <h2>Ops! Não era pra você estar aqui</h2>
                <br />
                <h3>Página não encontrada.</h3>
                <Link to="/" className="NotFound-link">
                    Voltar para página principal
                </Link>
            </div>
        </div>
    );
}
 
export default NotFound;