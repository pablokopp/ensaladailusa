import { Route, Routes } from "react-router-dom";

import Obra from "./components/Obra/Obra";
import Portada from "./components/Portada/Portada";
import ScrollUpFixer from "./components/ScrollUpFixer/ScrollUpFixer";
import { antesdequetemueras } from "./data/antesdequetemueras";
import { davidlava } from "./data/davidlava";
import { lineal } from "./data/lineal";
import { sergrande } from "./data/sergrande";
import { summary } from "./data/summary";

function App() {
  return (
    <ScrollUpFixer>
      <div className="container-programa">
        <Routes>
          <Route path="/" element={<Portada summary={summary} />} />
          <Route path="/davidlava" element={<Obra dataObra={davidlava} />} />
          <Route
            path="/antesdequetemueras"
            element={<Obra dataObra={antesdequetemueras} />}
          />
          <Route path="/lineal" element={<Obra dataObra={lineal} />} />
          <Route path="/sergrande" element={<Obra dataObra={sergrande} />} />
        </Routes>
      </div>
    </ScrollUpFixer>
  );
}

export default App;
{
  /* <Obra dataObra={sergrande} /> */
}
