import * as React from 'react';

import Home from '@mui/icons-material/Home';
import Apps from '@mui/icons-material/Apps';
import List from '@mui/material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';

import { ListItemDecorator } from '@mui/joy';
import { Typography } from '@mui/material';
import { Logout, TipsAndUpdates } from '@mui/icons-material';



const VerticalNav = () => {
    return (
        <List
            sx={{
                maxWidth: 280,
                background: '#121148',
                // maxHeigh:'10%',

                color: 'white',
                alignSelf: 'end'

            }}
        >

            <ListItem>
                <ListItemButton>
                    <ListItemDecorator>
                        <Apps />
                    </ListItemDecorator>
                    <Typography sx={{ marginLeft: '10px' }}>
                        P L A Z E R
                    </Typography>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemDecorator >
                        <Home />
                    </ListItemDecorator>
                    <Typography sx={{ marginLeft: '10px' }}>
                        Dashboard
                    </Typography>
                </ListItemButton>
            </ListItem>
            {/* <ListItem> */}

            <ListItem>
                <ListItemButton selected>
                    <ListItemDecorator>
                        < TipsAndUpdatesIcon />
                    </ListItemDecorator>
                    <Typography sx={{ marginLeft: '10px' }}>
                        My Projects
                    </Typography>

                </ListItemButton>
            </ListItem>
            <ListItem sx={{ marginTop: '280%' }}>
                <ListItemButton>
                    <ListItemDecorator>
                        <LogoutIcon />
                    </ListItemDecorator>
                    Logout
                </ListItemButton>
            </ListItem>
        </List>


    );
}





export default VerticalNav;