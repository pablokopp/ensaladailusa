import Elenco from "../Elenco/Elenco";
import FooterLogos from "../FooterLogos/FooterLogos";
import React from "react";
import Sinopsis from "../Sinopsis/Sinopsis";
import Titulo from "../Titulo/Titulo";

const Obra = ({ dataObra }) => {
  const { titulo, sinopsis, elenco, logos } = dataObra;
  return (
    <div className={`container-obra ${dataObra.cn}`}>
      <Titulo imgLogo={titulo.imgLogo} cn={titulo.cn} />
      <Sinopsis texto={sinopsis.texto} cn={sinopsis.cn} />
      <Elenco integrantes={elenco} />
      <FooterLogos logos={logos} />
    </div>
  );
};

export default Obra;
