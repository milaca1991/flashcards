import React, { useState } from "react";
import preguntas from "./questions";

const Juego = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(false); 
    if (index === preguntas.length - 1) {
      setIndex(0);
    } else {
      setIndex(index+1) ;
    }
  }


  function backClick() {
    setIsFlipped(false); 
    if (index === 0) {
      setIndex(preguntas.length - 1);
    } else {
      setIndex(index - 1) ;
    }


  }

  
function flipCard() {
  setIsFlipped(!isFlipped);
  changeColor(listaPreguntas);

}



  function changeColor(listaPreguntas) {
    let color;

    switch (listaPreguntas.difficulty) {
      case "Facil":
        color = "#FFECAF";
        break;

      case "Medio":
        color = "#E6FFFD";
        break;

      case "Dificil":
        color = "#FFBFBF";
        break;

      default:
        color = "#F3FDE8";
    }



    return (
    <div className="styleCard" style={{ backgroundColor: color }} onClick={() => flipCard(listaPreguntas)}>
    {isFlipped ? listaPreguntas.answer : listaPreguntas.question}
    {listaPreguntas.picture ? <img src={listaPreguntas.picture} alt="" className="imgQuestions"/>:<></>}
  </div>)

  }


  let listaPreguntas = preguntas[index];

  return (
    <div>
      <h3>
        Numero de tarjetas: ({index + 1} of {preguntas.length})
      </h3>


      {changeColor(listaPreguntas)} 


      <h3>Dificultad: {listaPreguntas.difficulty}</h3>
   
      <button className="button-27" onClick={backClick}>
        {" "}
        Atras
      </button>
      <button className="button-27" onClick={handleClick}>
        {" "}
        Siguiente
      </button>
    </div>
  );
};

export default Juego;
