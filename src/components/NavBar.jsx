/* rfce */
function NavBar(){

    return(
        <header className="bg-slate-950 p-5 flex justify-between place-items-center">
            <h1 className="text-slate-50">Moov</h1>
            <nav className="text-slate-50 hidden md:block">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default NavBar