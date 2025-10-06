import Button from "@mui/material/Button";
import React from "react";
import { TiThMenu } from "react-icons/ti";
import {  Link} from "react-router-dom";
const Navigation = () => {
    return (
    <nav>
    <div className="container flex items-center justify-end">
        <div className="col_1 w-[20%]">
            <Button className= '!text-black gap-2'> <TiThMenu />  <b> ALL CATEGORIES</b></Button>
        </div>
        <div className="col_2 w-[80%]">
            <ul className="flex items-center gap-7 font-capitalized">
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">Home</Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">Machinery</Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">Lubricants</Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]"> Nut/Bolts</Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">V-Belts</Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">Spanner & Hand Tools</Link>
                </li>
                
                
                
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">Spare Parts</Link>
                </li>
            </ul>
            
        </div>
    </div>
    
    </nav>
    )
}




export default Navigation;