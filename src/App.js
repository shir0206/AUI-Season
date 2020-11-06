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
        src="https://res.cloudinary.com/doywfjryu/image/upload/v1604663018/samples/fall_y59b8b.png"
        alt="fall"
        onClick={() => {
          alert("תודה רבה");
        }}
      ></img>

      <img
        src="https://res.cloudinary.com/doywfjryu/image/upload/v1604663018/samples/winter_qmklyz.png"
        alt="winter"
        onClick={() => {
          alert("תודה רבה");
        }}
      ></img>
      <img
        src="https://res.cloudinary.com/doywfjryu/image/upload/v1604663018/samples/spring_vjwrlb.png"
        alt="spring"
        onClick={() => {
          alert("תודה רבה");
        }}
      ></img>
      <img
        src="https://res.cloudinary.com/doywfjryu/image/upload/v1604663017/samples/summer_mg2yzw.png"
        alt="summer"
        onClick={() => {
          alert("תודה רבה");
        }}
      ></img>
    </div>
  );
}
