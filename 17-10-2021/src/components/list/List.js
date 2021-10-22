import Item from "../item/Item";

function List({arr}) {
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