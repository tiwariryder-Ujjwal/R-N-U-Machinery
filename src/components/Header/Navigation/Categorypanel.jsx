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


const Categorypanel = (props) => {

const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={props.openCategorypanel(false)}>
    <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
        
    <Drawer open={props.isOpenCatpanel} onClose={props.openCategorypanel(false)}>
        {DrawerList}
    </Drawer>
        </>
    )
}

export default Categorypanel;