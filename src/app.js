/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  

  let simb = ['♦', '♥', '♠', '♣'];
  let num = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function randomSimbIndex(){
    return Math.floor(Math.random()*simb.length);
  }

  let randomSimb = simb[randomSimbIndex()]

  function randomNumIndex(){
    return Math.floor(Math.random()* num.length);
  } 
  let randomNum = [randomNumIndex()]

  const top = document.querySelector(".top");
    if (randomSimb == "♥"){
      top.style.color="red";
    }else if (randomSimb == "♦"){
      top.style.color="red";
    }
  top.innerHTML=randomSimb;
 
  const medium = document.querySelector(".medium");
    if (randomSimb=="♥"){
      medium.style.color="red";
    }else if (randomSimb=="♦"){
      medium.style.color="red";
    }
  
  medium.innerHTML=randomSimb;

  const bottom = document.querySelector(".bottom");
    if (randomSimb=="♥"){
      bottom.style.color="red";
    }else if (randomSimb=="♦"){
      bottom.style.color="red"
    }
    



