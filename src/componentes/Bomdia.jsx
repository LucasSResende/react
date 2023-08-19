import React from "react";

//Forma de fazer o componente com array
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => [
  <h1 key="h1">Bom dia {props.nome}</h1>,
  <h2 key="h2">Até breve!</h2>,
];

/* 1ª outra forma de fazer o componente 
export default (props) => 
<div>
  <h1>Bom dia {props.nome}</h1>,
  <h2>Até breve!</h2>,
</div>
]; */

/* 2ª outra forma de fazer o componente
export default (props) => 
<React.Fragment>
  <h1 key="h1">Bom dia {props.nome}</h1>,
  <h2 key="h2">Até breve!</h2>,
</React.Fragment>
]; */
