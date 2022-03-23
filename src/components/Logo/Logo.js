import React from "react";

const Logo = ({ img, link, altImg, cn }) => {
  return (
    <div className={`container-logo ${cn}`}>
      <a href={link}>
        <img src={img} alt={altImg} />
      </a>
    </div>
  );
};

export default Logo;
