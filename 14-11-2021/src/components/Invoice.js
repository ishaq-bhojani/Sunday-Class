import { Link, useParams } from "react-router-dom";

const Invoice = () => {
    let params = useParams();
    console.log(params);
    return (<div>
        Invoice: {params.invoiceId}
        <div>
            <Link to="/">Home</Link>
        </div>
    </div>)
};

export default Invoice;