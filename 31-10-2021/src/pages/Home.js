import {useState} from 'react';
import List from '../components/list/List';
import AddItem from '../components/addItem/AddItem';

const Home = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2']);

    const onAddHandler = (data) => {
        setItems(prevState => [...prevState, data]);
    }
    return (
        <>
            <AddItem onAdd={onAddHandler}/>
            <List arr={items}/>
        </>
    );
}

export default Home;
