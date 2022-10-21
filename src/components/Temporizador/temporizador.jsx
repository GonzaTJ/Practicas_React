import { useState, useEffect } from "react";

function Temporizador(){
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSecons] = useState(0);

    useEffect(function(){
        if(targetSeconds === null) return;

        //targetSeconds tiene un valor
        setElapsedSecons(0);

        let intervalo = setInterval(function(){
            setElapsedSecons((elapsedSeconds)=> elapsedSeconds + 1)
        },1000);

        return ()=>{
            clearInterval(intervalo);
        }
    }, [targetSeconds]);


    function parseForm(ev){
        //Prevencion default
        ev.preventDefault();
        //Asignamos el valor "seconds" a la variable
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }


    if(elapsedSeconds >= targetSeconds && targetSeconds!==null){
        return(
            <div>
                <p>BOOOOOOOOOOOOOOOOOOM!</p>
                <button onClick={()=>setTargetSeconds(null)}>Reiniciar</button>
            </div>
        )
    }

    if(targetSeconds !== null ){
        return(
            <div>
                <p> La bomba explotara en {targetSeconds - elapsedSeconds} segundos!!! , corre willy corre!</p>
            </div>
        )    
    }

   

    if(targetSeconds === null){
        return (
                <div>
                    <p>
                        Tiempo a temporizar
                    </p>
                    <form action="#" onSubmit={ev=>parseForm(ev)}>
                        <input type="number" name="seconds" />
                        <button>Iniciar</button>
                    </form>
                </div>
        )
    }
}

export default Temporizador;