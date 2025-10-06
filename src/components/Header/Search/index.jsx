import React from "react";
import '../Search/style.css';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
const Search=() => {
    return(
        <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[20px] relative p-2">
            <input type="text" placeholder="Search..." className="w-full h-[35px]
            focus:outline-none bg-inherit p-2 text-[15px]"/>
            <Button className="!absolute top-1 right-2 z-50 !w-[40px] !min-w-[40px]
            h-[40px] !rounded-full !text-black">
                <FaSearch className="text-black text-[22px]"/></Button>

        </div>
    )
}

export default Search;