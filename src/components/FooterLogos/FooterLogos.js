import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import React from "react";
import ensaladaIlusa from "../../images/ensaladailusaLogo.png";

const FooterLogos = ({ logos }) => {
  return (
    <div className="container-logos">
      {logos &&
        logos.map((logo) => (
          <Logo img={logo.img} link={logo.link} altImg={logo.altImg} />
        ))}
      <Link to="/">
        <Logo
          img={ensaladaIlusa}
          link="#"
          altImg="Ensalada Ilusa"
          cn="ensaladailusa-logo"
        />
      </Link>
    </div>
  );
};

export default FooterLogos;
