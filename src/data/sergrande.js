import logoTitulo from "../images/sergrandeLogo.png";
import sergrandeBoton from "../images/sergrandeBoton1.png";
import sergrandeflyer from "../images/sergrandeFlyer.png";

export const sergrande = {
  nombre: "Ser Grande",
  cn: "sergrande",
  imgBoton: sergrandeBoton,

  titulo: {
    imgLogo: logoTitulo,
    cn: "sergrande",
  },
  sinopsis: {
    texto:
      "Ser grande es un monólogo sobre lo que nadie nos cuenta acerca de la vida adulta.",
    cn: "sergrande",
  },
  elenco: [
    {
      integrante: [
        {
          nombre: "Lucia Gutierrez Roberts",
          iglink: "https://www.instagram.com/lugutierrezroberts",
          weblink: null,
        },
      ],
      trabajo: "Interprete",
    },

    {
      integrante: [
        {
          nombre: "Lulú Trotta ",
          iglink: null,
          weblink: "https://www.linkedin.com/in/lul%C3%BA-trotta-963178115/",
        },
      ],
      trabajo: "Autora",
    },
  ],
  logos: [
    {
      img: sergrandeflyer,
      altImg: "Ser Grande Flyer",
      link: "#",
    },
  ],
};
