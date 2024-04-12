import{ Link } from "react-router-dom"
import MoblieNav from "./MoblieNav";
import MainNav from "./MainNav";

const Header = () => {
return(
    <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link 
            to = "/" 
            className = "text-3x1 font-bold tracking-light text-orange-500">
                MernEats.com
            </Link>
            <div className="md:hidden">
                <MoblieNav />
            </div>
            <div className="hidden md:block">
                <MainNav></MainNav>
            </div>
        </div>
    </div>
);
};

export default Header;