
import Footer from "./Footer";
import Navbar from "./Navbar";

import TopNav from "./TopNav";


const Layout = ({ children }) => {
    return (
        <div>
            <TopNav></TopNav>
            <hr />
            <div className="sticky top-0 z-50 h-24 bg-white" >
                <Navbar ></Navbar>
            </div>


            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;