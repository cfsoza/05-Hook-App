import { useEffect, useState } from "react"
import { Message } from "./Message";

 

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({ target }) => {
        const {name, value } = target;

        setformState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(()=> {
       // console.log('useEfect called');
    }, [])

    useEffect(()=> {
       // console.log('form State Chabge');
    }, [formState])

    useEffect(()=> {
        //console.log('email Chabge');
    }, [email])

     
    

  return (
     <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="UserName"
            name="username"
            value= {username}
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="fernando@google.com"
            name="email"
            value= {email}
            onChange={ onInputChange }
        />  

        {
            username === 'strider2' && <Message/>
        }
     </>
  )
}
