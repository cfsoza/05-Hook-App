import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"



export const CallbackHook = () => {

  const [counter, setcounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
      setcounter((c) => c + value );
    },
    [],
  )

   
  return (
    <>
      <h1>use Callback Hooks: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  )
}
