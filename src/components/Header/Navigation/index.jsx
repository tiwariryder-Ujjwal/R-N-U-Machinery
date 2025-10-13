import Button from "@mui/material/Button";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import {  Link } from "react-router-dom";
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
                    <Button className="link transition !text-blue-950 text-capitalize"><b>ABOUT US</b></Button></Link>
                </li>
                <li className="list-none">
                    <Link to="/" className="link transition text-[15px] font-[500]"> 
                    <Button className="link transition !text-blue-950 text-capitalize"><b>CONTACT US</b></Button></Link>
                </li>
                
            </ul>
            
        </div>
    </div>
    
    </nav>



    
        {/* category panel component */}
    <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>

    </>
    )
}




export default Navigation;