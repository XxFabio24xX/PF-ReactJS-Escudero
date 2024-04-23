import { MenuIcon } from "lucide-react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

/* rfce */
function NavBar() {
  return (
    <header className="flex justify-between p-5 bg-Mogo text-White">
        <Link to="/" id="titulo" className="italic text-4xl font-bold">MOOV</Link>
        <nav className="flex items-center gap-4 font-semibold">
            <div className="items-center hidden md:flex md:gap-4">
                <NavLink to={"/marca/Adidas"}>Adidas</NavLink>
                <NavLink to={"/marca/Nike"}>Nike</NavLink>
                <NavLink to={"/marca/Converse"}>Converse</NavLink>
            </div>
            <MenuIcon className="w-6 h-6 md:hidden" />
        </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;