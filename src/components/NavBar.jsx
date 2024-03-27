import { MenuIcon } from "lucide-react";
import CartWidget from "./CartWidget";

/* rfce */
function NavBar() {
  return (
    <header className="flex justify-between p-5 bg-slate-950 text-slate-50">
        <a id="titulo" className="text-2xl font-bold" href="#">MOOV</a>
        <nav className="flex items-center gap-4">
            <div className="items-center hidden md:flex md:gap-4">
                <a href="#">Home</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
            </div>
            <MenuIcon className="w-6 h-6 md:hidden" />
        </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;