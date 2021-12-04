import "../css/componentes.css";
//import wildcat from "../assets/img/wildcat.png";

export const saludar = (nombre) => {
  console.log("Creando etiqueta h1");
  const h1 = document.createElement("h1");
  h1.innerText = `Hola ${nombre}!`;
  document.body.append(h1);

  //Carga la imagen por import por el file-loader plugin de webpack
  /* const image = document.createElement("img");
  image.src = wildcat;
  document.body.append(image); */
};
