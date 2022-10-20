function Contador(){
    
    //Estado del componente
    let contador =0;
    return(
        <div>
            <p>
                Haz realizado tantos clicks en el boton.
            </p>
            <button>Pulsa si te la bancas</button>
        </div>
    );
}

export default Contador;