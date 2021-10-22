import { useState } from 'react';
import './App.css';
import List from './components/list/List';
import AddItem from './components/addItem/AddItem';

// className={`my-class ${bool && "App"}`}
// style={{backgroundColor: bool ? "#000" : "#fff"}}

function App() {
  const bool = true;
  const [items, setItems] = useState(['Item 1', 'Item 2']);

  const onAddHandler = (data) => {
    setItems(prevState => [...prevState, data]);
    console.log(items);
  }
  return (
    <div className="App">
      <AddItem onAdd={onAddHandler} />
      <List arr={items} />
    </div>
  );
}

export default App;
