import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

const dataMenu = [
  { title: "title 1", text: "text 1 id: 1", id: 1 },
  { title: "title 2", text: "text 2 id: 2", id: 2 },
  { title: "title 3", text: "text 3 id: 7", id: 7 },
  { title: "title 4", text: "text 4 id: 99", id: 99 },
  { title: "title 5", text: "text 5 id: 4", id: 4 },
];

const initialState = dataMenu.map((menu, index) => ({
  ...menu,
  expanse: index === 0,
}));

function App() {
  const [dataComponent, setDatacomponent] = useState(initialState);

  const setDataMenuComponent = (id) => {
    setDatacomponent((prevMenu) =>
      prevMenu.map((menu) =>
        menu.id === id
          ? { ...menu, expanse: !menu.expanse }
          : { ...menu, expanse: false }
      )
    );
  };

  return (
    <div className="App">
      {dataComponent
        .sort((a, b) => a.id - b.id)
        .map((d, index) => {
          return (
            <div key={index}>
              <Menu
                data={d}
                onClick={() => setDataMenuComponent(d.id)}
                expanse={d.expanse}
              />
            </div>
          );
        })}
    </div>
  );
}

export default App;
