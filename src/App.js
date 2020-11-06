import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [style, setStyle] = useState(Math.floor(Math.random() * 2 + 1));

  console.log(style);

  return (
    <div className={style === 1 ? "App bright" : "App dark"}>
      <h1> </h1>
      <h1>ברוכים הבאים :)</h1>
      <h2>איזו עונה אתם הכי אוהבים?</h2>

      <img
        src={require("./fall.png")}
        alt="op"
        onClick={() => {
          alert("תודה רבה");
        }}
      ></img>

      <img
        src={require("./winter.png")}
        alt="op"
        onClick={() => {
          alert("תודה רבה");
        }}
      ></img>
      <img
        src={require("./spring.png")}
        alt="op"
        onClick={() => {
          alert("תודה רבה");
        }}
      ></img>
      <img
        src={require("./summer.png")}
        alt="op"
        onClick={() => {
          alert("תודה רבה");
        }}
      ></img>
    </div>
  );
}
