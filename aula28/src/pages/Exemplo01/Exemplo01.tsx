import { useState } from "react";

const Exemplo01 = () =>{

    const [cont, setCont] = useState(0);
    const [nome, setNome] = useState("Alguem");
    const [frase,setFrase] = useState("");

    const limite = 10;

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setFrase(event.target.value)
    }

    return(
        <>
            <h1>HOOK - useState()</h1>

            <p>Valor: { cont }</p>
            <p>Nome: {  nome }</p>
            <p>Frase digitada: {  frase }</p>

            <button onClick={ () =>{ setCont(cont + 1) } } disabled={ cont >= limite }> + </button>
            <button onClick={ () =>{ setCont(cont - 1) } } disabled={ cont == 0 }> - </button>
            <button onClick={ () =>{ setCont(0);setNome("") } } disabled={ cont == 0 }> Reset </button>
            <button onClick={ () =>{ setNome("Joãosdfsdf sdf sdf ") } }>Modificar Nome</button>

            <form>
                <label>Frase: </label>
                <input type="text" value={ frase } onChange={ handleChange } />
            </form>

        </>
    )
}
export default Exemplo01;