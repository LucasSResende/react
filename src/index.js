import React from "react";
import ReactDOM from "react-dom";

import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Maria" />
      <Filho nome="João" />
    </Pai>
  </div>,
  document.getElementById("root")
);
