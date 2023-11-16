import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-example";


export const Layout = () => {
    const {Counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${Counter}`);

    const {author, quote} = !!data && data[0];


  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>

        
        {
          isLoading
           ? <LoadingQuote/>
           : <Quote quote={quote} author={author}/>
        }
 

        <button 
          onClick={ ()=> increment() } 
          disabled= { isLoading }
          className="btn btn-primary">
            Next quote
        </button>

    </>
  )
}
