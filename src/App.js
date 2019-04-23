import React from "react";
// import HelloWorld from "./state-drills/HelloWorld";
// import Bomb from "./state-drills/Bomb";
// import RouletteGun from "./state-drills/RouletteGun";
// import Tabs from "./state/Tabs";
import Accordian from "./state-drills/Accordian";

const sectionsArray = [
  {
    title: "Id minim dolor sit deserunt do sint dolore.",
    content:
      "Dolore enim do amet dolore nisi nulla magna do. Dolor voluptate ullamco ut ea eiusmod fugiat enim culpa amet. Culpa consequat velit ipsum amet minim consequat dolore cillum cupidatat adipisicing cillum exercitation ut. Sit consequat ex elit incididunt amet culpa dolor Lorem mollit eiusmod non est aliqua officia."
  },
  {
    title:
      "Esse cupidatat ut deserunt eiusmod eu minim voluptate laboris voluptate ad sit do cillum.",
    content:
      "Qui qui esse labore quis adipisicing est dolore velit nostrud magna dolor. Deserunt nisi nulla ullamco nulla exercitation. Enim nostrud velit quis officia incididunt reprehenderit do magna officia deserunt. Ipsum duis fugiat mollit Lorem consectetur consequat ut cupidatat minim est quis enim proident. Ut incididunt enim qui incididunt. Velit exercitation nisi ea exercitation labore ipsum sunt proident ex magna officia occaecat elit mollit. Sunt in aliqua duis cillum fugiat cupidatat est anim ad commodo consectetur nisi."
  },
  {
    title:
      "Fugiat ut dolor culpa aute consectetur laborum reprehenderit velit labore pariatur consectetur ex consectetur.",
    content:
      "Nulla reprehenderit nulla ullamco officia. Culpa do voluptate ipsum amet aliqua eiusmod ipsum commodo. Ex ut pariatur reprehenderit non est elit excepteur ad pariatur dolore aliquip commodo proident. Sint sit do velit sit nisi. Duis aliqua aliqua duis laborum deserunt elit eiusmod enim eiusmod nulla minim sit magna."
  },
  {
    title:
      "Pariatur ad laboris cillum consequat labore sint fugiat nostrud id in proident esse.",
    content:
      "Duis proident irure do quis reprehenderit Lorem esse adipisicing magna esse sint exercitation mollit anim. Proident incididunt eu eiusmod dolor ut labore ea voluptate ut laborum ad minim veniam in. Laborum enim commodo sit eiusmod quis sunt minim. Consectetur et dolor culpa non cillum enim dolore velit proident velit ut consequat consequat proident. Ut consequat Lorem laboris velit exercitation culpa elit Lorem nulla enim reprehenderit."
  }
];

function App() {
  return (
    <main className="App">
      <Accordian sections={sectionsArray} />
    </main>
  );
}

export default App;
