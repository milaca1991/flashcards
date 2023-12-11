import React from "react";

const preguntas = [
  {
    question: "Haz clic en mí para conocer las reglas", 
     answer:     <div>
     * Haga clic en la tarjeta para descubrir la respuesta correcta<br />
     * Pulsa el botón siguiente para ver la siguiente pregunta<br />
     * Cada pregunta tiene un nivel de dificultad
   </div>,  
     difficulty: "",  
     id: 0},
  { question: "Electroequipos se fundó en el año... ", 
  answer: "29 de Dic 1999",
   difficulty: "Medio", 
   id: 1 , 
   picture:"./img/img7.jpg"},

  { question: "A que año está establecido cumplir nuesta visión ", 
  answer: "Al 2028 seremos reconocidos....",
   difficulty: "Facil", 
   id: 2 ,
   picture:"./img/img8.jpg"},

  { question: "Estamos comprometidos a proporcionar soluciones integrales a través del.....", 
  answer: "Diseño, estructuración e implementación de proyectos especializados", 
  difficulty: "Dificil",
   id: 3 ,
   picture:"./img/img9.jpg"},

  { question: "Menciona dos (2) de nuestros siete principios (7):", 
  answer: <div>
  * Cultura de servicio<br />
  * Somos innovadores<br />
  * Trabajamos en equipo<br />
  * Actuamos con pasión<br />
  *Orientados al logro de objetivos<br />
  *Equidad y trato justo<br />
  *Somos colaboradores integrales<br />
  *Dispuestos al cambio<br />
  *Confiamos en nuestro equipo<br />
</div>, 
  difficulty: "Medio", 
  id: 4 ,
   picture:"./img/img12.png"},

  { question: "Menciona uno de nuestros tres (3) valores:", 
  answer: <div>
  * Orgullo<br />
  * Confianza<br />
  * Compañerismo<br />
 
</div>, 
  difficulty: "Facil", 
  id: 5 , 
  picture:"./img/Confianza.jpeg"},

  { question: <div>
    Responde falso o verdadero<br />
    Una de nuestras megas es:<br />
    Brindar un excelente servicio reflejado en una atención al cliente excepcional<br />
   
  </div>,  
  answer: "Verdadero", 
  difficulty: "Facil",
   id: 6 ,
   picture:"./img/img10.png" },

   { question: <div>
    Menciona el/los objetivos estratégicos al que le apunta tu nuevo rol:
  </div>,  
  answer:<div>
    OBJETIVO 11 . 
    Promover el desarrollo profesional y personal de los integrantes del equipo <br></br> 
    OBJETIVO 12 . 
    Consolidar una cultura organizacional fuerte alineada a la estrategia corporativa <br></br>
    
  </div>,    
  difficulty: "Facil",
   id: 7 ,
   picture:"./img/obj.PNG" },
     { question: <div>
    Menciona el software que se maneja actualmente para el seguimiento a la estrategia
  </div>,  
  answer:<div>Kawak
    
  </div>,    
  difficulty: "Facil",
   id: 8 ,
   picture:"./img/obj.PNG" },

];

export default preguntas;
