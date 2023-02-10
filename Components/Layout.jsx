
import Footer from "./Footer";
import Navbar from "./Navbar";

import TopNav from "./TopNav";


const Layout = ({ children }) => {
    return (
        <div>
            <div className="sticky top-0 z-50 bg-white" >
                <TopNav></TopNav>
                <hr />
                <Navbar></Navbar>
            </div>

            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;