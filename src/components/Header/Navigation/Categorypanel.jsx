import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const CategoryPanel = (props) => {
    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen)
    };

const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={props.openCategoryPanel(false)}>
    <List>
        {['Machines', 'Welding Rod', 'Safety Equipments', 'Bearing', 'Lubricants', 'Hand Tools', 'Power Tools', 'Abresive Tools','Nut/Bolts']
        .map((text, index) => (
        <ListItem key={text} disablePadding>
            <ListItemButton>
            
            <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
        ))}
    </List>
    <Divider />
    <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
            <ListItemButton>
            
            <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
        ))}
    </List>
    </Box>
    );
    return (
        <>
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>  
    <Drawer open={props.isOpenCatPanel} onClose={props.toggleDrawer(false)}>
        {DrawerList}
    </Drawer>
        </>
    )
}

export default CategoryPanel;