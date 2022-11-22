const Home = () => {
    return (
        <div className="Home-container">
            <h1>Início</h1>
            <div className="Home-content-wrapper">
                <h3 className="Home-content-title">Olá seja muito bem vindo &#40;a&#41; !</h3>
                <p className="Home-content-text">A página permite a criação de documentos que são enviados a um servidor, podendo ter os valores alterados e deletados.</p>

                <div className="Home-content-div">
                    <h3>Como funciona?</h3>
                    <div className="Home-content-howTo">
                        <p>
                            O site usa o "MockApi" para trabalhar com o BackEnd. Aqui você pode criar blogs ou postagens que são enviados a um banco de dados em JSON. Os valores também podem ser acessados editados e deletados. O banco de dados tem um limite de 100 itens.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Home;