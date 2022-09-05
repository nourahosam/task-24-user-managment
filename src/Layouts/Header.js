import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const Header = () => {
    <AppBar color='secondary'>
        <Toolbar>
            <IconButton>
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
}

export default Header;