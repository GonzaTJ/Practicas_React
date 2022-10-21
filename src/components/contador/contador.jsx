import { useState } from "react";

function Contador(){
    
    //Estado del componente
    const[contador, setContador] = useState(0);

    return(
        <div>
            <p>
                Haz realizado {contador} clicks en el boton.
            </p>
            <button onClick={()=>{setContador(contador + 1)}}>Pulsa si te la bancas</button>
        </div>
    );
}

export default Contador;