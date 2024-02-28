import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
//import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Header from "./components/Header";
import VerticalNav from "./components/VerticalNav";


function LayOut() {
    return (
        <div>
            {/* <Box> */}
            <Header />
            <div style={{ display: 'flex' }} >
                <VerticalNav />
                <div style={{
                    display: 'flex',
                    margin: '100px 20px 20px 20px',
                    //  marginTop: 'calc(100% - 1px)' 

                }} >



                </div>
            </div>

            {/* </Box> */}
        </div>
    );
}

export default LayOut;

