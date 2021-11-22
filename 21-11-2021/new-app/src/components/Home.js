import { useSelector, useDispatch } from "react-redux";

import { SOAP_SELL, SOAP_BUY } from "../store/actions";

const Home = () => {
    const soap = useSelector(state => state.soap);
    const dispatch = useDispatch();

    const sellHandler = () => {
        dispatch({type: SOAP_SELL});
    }
    const buyHandler = () => {
        dispatch({type: SOAP_BUY, payload: 10});
    }

    return (<div>
        {soap}
        <div>
            <button onClick={sellHandler}>Sell</button>
            <button onClick={buyHandler}>Buy</button>
        </div>
    </div>)
};

export default Home;