import {useState, useEffect} from 'react'

const useFetch = (url) => {
  // Vamos usar o abort para para o fetch, para isso um segundo valor no fetch
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
      const abortVar = new AbortController();

      fetch(url, {signal: abortVar.signal})
      .then( (res) => {
        if(!res.ok){
          // Se a propriedade ok retornar falso:
          throw Error("Não foi possível capturar os valores do servidor. Resultado: " + res)
        }

        return res.json()
      })
      .then( (data) => {
        setData(data)
        setIsLoading(false) // O valor de carregamento vira falso a receber data
        setError(null)
      })
      .catch( (err) => {
        // Erro é recebido aqui
        if(err.name === "AbortError"){
          // Reconhecer que o fetch foi abortado.
          console.log("Fetch foi abortado")
        } else{
          setIsLoading(false) // O valor de carregamento vira falso ao dar erro
          setError(err.message)
        }
      })

      // função clean up para para o fetch caso troque de página
      return () => abortVar.abort();

    }, [url]) // o useEffect deve ficar de olho para mudanças na url

    // Retornar os valores do useState em um objeto

    return {data, isLoading, error}

}
 
export default useFetch;