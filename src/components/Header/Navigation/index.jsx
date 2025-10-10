import Button from "@mui/material/Button";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import {  Link} from "react-router-dom";
import CategoryPanel from "./CategoryPanel"; 
const Navigation = () => {
const [isOpenCatPanel ,setIsOpenCatPanel] = useState(false);
const openCategoryPanel=()=>{
    setIsOpenCatPanel(true);
}   



    return (
        <>
        
        

    <nav>
    <div className="container flex items-center justify-end">
        <div className="col_1 w-[20%]">
            <Button className= '!text-black gap-2'onClick={openCategoryPanel}> <TiThMenu />  <b> ALL CATEGORIES</b></Button>
        </div>
        <div className="col_2 w-[80%]">
            <ul className="flex items-center gap-7 font-capitalized">
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">
                    <Button className="link transition  !text-blue-950 text-capitalize"><b>HOME</b></Button></Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">
                    <Button className="link transition !text-blue-950 text-capitalize"><b>MACHINES</b></Button></Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">
                    <Button className="link transition !text-blue-950 text-capitalize"><b>LUBRICANTS</b></Button></Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]"> 
                    <Button className="link transition !text-blue-950 text-capitalize"><b>NUT/BOLTS</b></Button></Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">
                    <Button className="link transition !text-blue-950 text-capitalize"><b>V-BELTS</b></Button></Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">
                    <Button className="!link transition !text-blue-950 text-capitalize"><b>SPANNER & TOOLS</b></Button></Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">
                    <Button className="link transition !text-blue-950 text-capitalize"><b>SPARE PARTS</b></Button></Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]">
                    <Button className="link transition !text-blue-950 text-capitalize"><b>OTHERS</b></Button></Link>
                </li>
            </ul>
            
        </div>
    </div>
    
    </nav>



    
        {/* category panel component */}
    <CategoryPanel isOpenCatPanel={isOpenCategoryPanel} setIsOpenCatPanelOpenCatPanel={setIsOpenCatPanel}/>

    </>
    )
}




export default Navigation;