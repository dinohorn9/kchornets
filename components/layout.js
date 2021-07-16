import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
            <Footer />
            
        </div>
    )
}

export default Layout
