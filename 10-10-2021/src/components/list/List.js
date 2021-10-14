import Item from "../item/Item";

function List() {
    const arr = ['Item 1', 'Item 2'];
    const items = arr.map((item, index) => {
        return <Item key={'no-'+index} title={item} />
    });
    return (
        <div>
            {items}
        </div>
    );
}

export default List;