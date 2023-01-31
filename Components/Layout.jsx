
import Footer from "./Footer";
import Navbar from "./Navbar";

import TopNav from "./TopNav";


const Layout = ({ children }) => {
    return (
        <div>
            <TopNav></TopNav>
            <Navbar></Navbar>

            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;