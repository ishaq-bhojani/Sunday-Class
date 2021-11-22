
function AddItem({onAdd}) {
let itemName = "";
    const onSubmitHandler = (event) => {
        event.preventDefault();
        onAdd(itemName);
    }
    const onInputChangeHandler = (event) => {
        itemName = event.target.value;
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label for="my-input">Item Name</label>
                    <input id="my-input" onChange={onInputChangeHandler} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddItem;
