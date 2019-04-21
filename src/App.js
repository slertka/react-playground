import React from "react";
import "./App.css";
import Split from "./composition/Split";

function App() {
  return (
    <main className="App">
      <Split className="left">
        Veniam enim consectetur anim esse. Amet Lorem qui ea laborum sunt.
        Cupidatat do incididunt voluptate et mollit pariatur culpa dolor
        pariatur ad commodo labore. Tempor aliquip incididunt velit id ex aute
        irure sit cupidatat dolor. Sunt anim exercitation mollit ut veniam
        veniam aliquip. Do nisi minim ipsum pariatur commodo ipsum dolore sint
        laborum cillum amet nisi duis. Culpa consequat esse ullamco occaecat
        reprehenderit officia consectetur occaecat non enim magna qui non ea.
      </Split>
      <Split className="right">
        Reprehenderit velit ea irure excepteur elit laboris nisi. Occaecat qui
        et sit consectetur tempor. Lorem veniam eu ipsum incididunt aliqua
        aliquip laborum.
      </Split>
    </main>
  );
}

export default App;
