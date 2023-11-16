import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHook = () => {
    const {Counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${Counter}`);

    const {author, quote} = !!data && data[0];


  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>

        {/* {
            (isLoading)
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                  )
                : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                     </blockquote>
                  )
        } */}

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
