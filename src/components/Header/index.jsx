import React from "react";
import { Link } from "react-router-dom"; 
import Search from "./Search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {MdOutlineShoppingCart  } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
    },
}));


const Header = () => {
    return (
        <header className="bg-white">
            <div className="top-strip py-2 border-t-[1px] border-gray-400 border-b-[1px]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className="text-[12px] font-[500]">Get the machinery 
                            and spares at reasonable price

                        </p>
                    </div>
                    <div className="col2 flex items-center justify-end">
                    <ul className="flex items-center gap-3">
                        <li className="list-none">
                        <Link to='/help-center' className="text-[12px] link font-[500] transition">Help Center</Link>
                        </li> 
                        <li className="list-none">
                        <Link to='/order-tracking' className="text-[12px] link font-[500] transition">Order Tracking</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>

            <div className="header py-2 border-b-[1px] border-gray-400">
                <div className="container flex items-center justify-between">
                <div className="col1 w-[25%]">
                    <Link to={'/'} ><img className="w-20.5 h-20" src="/logo.jpg"/> </Link>
                </div>

                <div className="col2 w-[45%]">
                    <Search/>
                </div>

                <div className="col3 w-[30%] flex items-center pl-7">
                    <ul className="flex items-center justify-end w-full gap-3">
                        <li className="list-none">
                            <Link to='/login' className="link transition text-[15px] font-[500]"> Login</Link>   |&nbsp;  <Link to='/register' 
                            className="link transition text-[15px] font-[500]">Register</Link>
                        </li>
                        <li >
                        <Tooltip title="Cart" placement="top">  
                            <MdOutlineShoppingCart className="w-[40px] h-[40px] justify-evenly pl-3" aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">

                    </StyledBadge>
        </MdOutlineShoppingCart>
        <Badge
    anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
    }}
    > </Badge>
    </Tooltip>
    </li>
    <li >
        <Tooltip title="Compare" placement="top">
                            <IoIosGitCompare className="w-[40px] h-[40px] justify-evenly pl-3" aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">

                    </StyledBadge>
        </IoIosGitCompare>
        <Badge
    anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
    }}
    > </Badge>
    </Tooltip>
    </li>
    <li >
        <Tooltip title="Wishlist" placement="top">
                            <FaRegHeart className="w-[40px] h-[40px] justify-evenly pl-3" aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">

                    </StyledBadge>
        </FaRegHeart>
        <Badge
    anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
    }}
    > </Badge>
    </Tooltip>
    </li>
                    </ul>
                </div>

                </div>
            </div>

    
        <Navigation/>      

        </header>
    )
}


export default Header;