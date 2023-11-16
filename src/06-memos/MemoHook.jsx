import { useMemo, useState } from "react";
import { useCounter } from "../hooks"



const heaveStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos....');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { Counter, increment } = useCounter(4000);
    const [show, setshow] = useState(true);

    const memorizedValue =  useMemo(() => heaveStuff(Counter), [Counter]) //Memoriza un valor, hasta que cambie.

    return (
        <>
            <h1>Counter: <small>{ Counter }</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ ()=> setshow(!show) }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
