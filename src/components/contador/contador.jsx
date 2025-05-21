import { use, useState } from 'react';
import './Contador.css';

export default function Contador() {
    const [numero, setNumero] = useState
    return (
        <div>
            <span>{numero}</span>
            <button>Incrementar</button>
        </div>
    );
}