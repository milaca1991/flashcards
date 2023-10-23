import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Juego from "./Components/Juego";
import preguntas from "./Components/questions";

function App() {
  return (
    <div className="App">
      <h1>Flashcards de la estrategia </h1>
      <h3>Pongamos a pruebas tus conocimientos en la estrategia</h3>
      <h3>Tendrás que adivinar la respuesta correcta para cada pregunta</h3>
      <Juego></Juego>
    </div>  
  );
}

export default App;
