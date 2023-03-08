import React from "react";

function Header() {
    return(
        <header className="flex items-center justify-around h-24 border-b-8 w-full bg-slate-200">
            <div className="flex">
                <div className="text-2xl">Hodon</div>
                <div className=""></div>
            </div>
            <div className="flex">
                <a className="header_navi" href="">About</a>
                <a className="header_navi" href="">News</a> 
                <a className="header_navi" href="">Contactus</a>
            </div>
            <div className="flex">
                <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold rounded-full py-2 px-1">Get Started For Free</button>
                <button className="bg-amber-400 hover:bg-amber-700 text-white font-bold rounded-full py-2 px-1">Go To Demo</button>
            </div>
        </header>
    )
}

export default Header;