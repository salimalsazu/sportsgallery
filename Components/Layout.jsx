import Navbar from "./Navbar";
import TopNav from "./TopNav";


const Layout = ({ children }) => {
    return (
        <div>
            <TopNav></TopNav>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default Layout;