import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackageList";
import Item from "./components/Item";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onDeleteItems={handleDeleteItems}
        onPackItems={handlePackedItem}
        items={items}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
