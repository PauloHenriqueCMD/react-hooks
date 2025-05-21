// import {useState } from "react";

// export default function App() {
//   const [nome] = useState("Paulin");
//   const [situacao, setSituacao] = useState(true);

// function mudarSituacao(){
//   setSituacao(!situacao);
// }
  
  
//   return (
//     <>
//         <h2>Nome:{nome}</h2>
//         <h2>Situação: {situacao ? `Ativo` : `Inativo`}</h2>
//         <button onClick= {mudarSituacao}>Mudar Situação</button>
//     </>
//   )

// }

import contador from "./components/contador/contador";
export default function Contador(){
    return(
        <>
           <contador/>
        </>
    )
}