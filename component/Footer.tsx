import React from "react";

function Footer() {
    return(
        <footer className="flex items-center justify-around h-24 w-full bg-slate-700 text-slate-50">
            <div className="flex">
                <div className="text-2xl"></div>
                <div className="">Created by Pacinobatores</div>
            </div>
            <div className="flex">
                <a className="header_navi" href="">About</a>
                <a className="header_navi" href="">News</a> 
                <a className="header_navi" href="">Contact us</a>
            </div>
        </footer>
    )
}

export default Footer;