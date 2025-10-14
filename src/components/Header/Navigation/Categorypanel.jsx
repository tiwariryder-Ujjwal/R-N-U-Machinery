import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";


const CategoryPanel = (props) => {

    const toggleDrawer = (newOpen) => () => {
    
        props.setIsOpenCatPanel(newOpen)
    };

const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="CategoryPanel">
<h3 className='p-3 text-[18px] font-[500] flex items-center justify-between'>
    <b>All Categories</b><IoCloseSharp onClick={toggleDrawer(false)} 
    className='cursor-pointer text-[20px]'/>
    </h3>


    <div className='scroll'>
<ul className='w-full'>
<li className='list-none flex item-center relative'>
    <Button className='w-full !text-left !justify-start !px-3 !text-black'>Machines</Button>
    <FaAngleDown className='absolute top-[10px] right-[10px] cursor-pointer'/>


    <ul className='submenu absolute top-[100%] left-[0%] w-full pl-4'>
        <li className='list-none relative'>
            <Button className='w-full !text-left !justify-start  !text-black !cursor-pointer'>Welding Machine</Button>
            <FaAngleDown className='absolute top-[10px] right-[10px] cursor-pointer'/>
    
    <ul className='submenu absolute top-[100%] left-[0%] w-full pl-4'>
        <li className='list-none relative'>
            <Button className='w-full !text-left !justify-start  !text-black !cursor-pointer'>Single Phase</Button>
            
            
            <ul className='submenu absolute top-[100%] left-[0%] w-full'>
            <li className='list-none relative'>
                <Button className='w-full !text-left !justify-start  !text-black !cursor-pointer'>Double Phase</Button>
                
            <ul className='submenu absolute top-[100%] left-[0%] w-full'>
                <li className='list-none relative'>
                    <Button className='w-full !text-left !justify-start  !text-black !cursor-pointer'>3 in 1 Phase</Button>
                
                <div className='scroll'>
                    <ul className='w-full'>
                    <li  className='list-none flex item-center relative'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-black'>Power Tools</Button>
    <FaAngleDown className='absolute top-[10px] right-[10px] cursor-pointer'/>
                    </li>
                    </ul>
                    </div> 
                </li>
            </ul>
                </li>  
            </ul>
            </li>
            </ul>
        
        </li>
    </ul>
</li>

</ul>


    </div>

    
    </Box>
    );
    return (
        <>
    
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
    {DrawerList}
    </Drawer>
        </>
    );
};

export default CategoryPanel;