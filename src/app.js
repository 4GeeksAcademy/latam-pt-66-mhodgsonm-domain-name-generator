import "bootstrap";
import "./style.css";

// Variables declaradas en el ámbito global para que todas las funciones puedan acceder
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

window.onload = function() {
  console.log("Domain Name Generator by Hodgson Dev LLC");

  // Mostrar todas las combinaciones en consola
 
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domain = pronoun[i] + adj[j] + noun[k] + ".com";
      }
    }
  }

/*
for (const i in pronoun) {
    for (const j in adj){
        for (const k in noun) {
            console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        }
    }
  }
*/
  // Generar el primer dominio inmediatamente
  generateDomainNames();
  
  // Generar un nuevo dominio cada 3 segundos
  setInterval(generateDomainNames, 3000);
};

function generateDomainNames() {
  let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomAdj = adj[Math.floor(Math.random() * adj.length)];
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];
  
  // Actualizar el DOM (sin return antes para que esta línea SÍ se ejecute)
  document.querySelector("#domain-name").innerText = randomPronoun + randomAdj + randomNoun + ".com";
}