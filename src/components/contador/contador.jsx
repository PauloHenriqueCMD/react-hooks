import { useState } from 'react';
import './Contador.css';

export default function Contador() {
    const [numero, setNumero] = useState(0);

    function Contar (){
        setNumero(numero + 1);
    }
    function Diminuir (){
        setNumero(numero - 1);
    }
    function Zerar (){
        setNumero(0);
    }
    return(
        <div className='container'>
            <span>{numero}</span>
        <div className='botoes'>
          <button onClick={Contar}>+</button>
          <button onClick={Zerar}>Zerar</button>
          <button onClick={Diminuir}>-</button>
        </div>
        </div>    
    )


}