import { Routes as AppRoutes, Route, Link } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Invoice from "../components/Invoice";

const Routes = () => {
    return (
        <AppRoutes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="invoices/:invoiceId" element={<Invoice />} />
        </AppRoutes>
    );
};

export default Routes;