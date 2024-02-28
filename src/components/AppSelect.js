// import React, { useRef, useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Popper from '@mui/material/Popper';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import { useNavigate } from 'react-router-dom';
// import { useAppContext } from './AppContext';
// import axios from 'axios'; // Import axios for HTTP requests
// import { AppDisplay ,setProjects} from './AppDisplay';


// const AppSelect = () => {
//     const [open, setOpen] = useState(false);
//     const anchorRef = useRef(null);
//     const { selectedApps, addSelectedApp } = useAppContext();
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch selected apps from backend when component mounts
//         axios.get('/http://localhost:3002/selected-apps')
//             .then(response => {
//                 const storedApps = response.data;
//                 // Add stored apps to selectedApps state
//                 storedApps.forEach(appName => addSelectedApp(appName));
//             })
//             .catch(error => console.error('Error fetching selected apps:', error));
//     }, [addSelectedApp]);

//     const handleToggle = () => {
//         setOpen((prevOpen) => !prevOpen);
//     };

//     const handleClose = (event) => {
//         if (anchorRef.current && anchorRef.current.contains(event.target)) {
//             return;
//         }
//         setOpen(false);
//     };

//     const handleAppClick = (appName) => {
//         addSelectedApp(appName);
//         setOpen(false);
//         // Send selected app to backend to store
//         axios.post('http://localhost:3002/selected-apps', { appName })
//             .catch(error => console.error('Error storing selected app:', error));
//     };

//     const handlePageTwoNavigation = () => {
//         if (selectedApps.length > 0) {
//             const selectedAppsParam = selectedApps.join('+');
//             navigate(`/PageTwo/${selectedAppsParam}`);
//         }
//     };


//     // const handleViewApps = async () => {
//     //     try {
//     //         // Fetch the selected apps from the backend
//     //         const response = await axios.get('http://localhost:3002/selected-apps');
//     //         const storedApps = response.data;
//     //         // Update the selectedApps state with the fetched apps
//     //         setProjects(storedApps);
//     //     } catch (error) {
//     //         console.error('Error fetching selected apps:', error);
//     //     }
//     // };

//     return (
//         <Stack direction="column" spacing={2}>
//             <div>
//                 <p>
//                     <HomeWorkIcon /> Organization 01
//                     <Button
//                         ref={anchorRef}
//                         id="composition-button"
//                         aria-controls={open ? 'composition-menu' : undefined}
//                         aria-expanded={open ? 'true' : undefined}
//                         aria-haspopup="true"
//                         onClick={handleToggle}
//                         variant="outlined"
//                         fullWidth=""
//                         endIcon={<KeyboardArrowDownIcon />}
//                     >
//                         View Apps
//                     </Button>
//                     <Popper
//                         open={open}
//                         anchorEl={anchorRef.current}
//                         role={undefined}
//                         placement="right-start"
//                         transition
//                         disablePortal
//                     >
//                         {({ TransitionProps, placement }) => (
//                             <Grow
//                                 {...TransitionProps}
//                                 style={{
//                                     transformOrigin:
//                                         placement === 'bottom-start' ? 'left bottom' : 'left top',
//                                 }}
//                             >
//                                 <Paper>
//                                     <ClickAwayListener onClickAway={handleClose}>
//                                         <MenuList
//                                             autoFocusItem={open}
//                                             id="composition-menu"
//                                             onKeyDown={(event) => {
//                                                 if (event.key === 'Tab') {
//                                                     event.preventDefault();
//                                                     setOpen(false);
//                                                 } else if (event.key === 'Escape') {
//                                                     setOpen(false);
//                                                 }
//                                             }}
//                                         >
//                                             {['Leave App', 'Salary App', 'Diary App'].map((appName) => (
//                                                 <MenuItem
//                                                     key={appName}
//                                                     onClick={() => handleAppClick(appName)}
//                                                     disabled={selectedApps.includes(appName)}
//                                                 >
//                                                     {appName}
//                                                 </MenuItem>
//                                             ))}
//                                         </MenuList>
//                                     </ClickAwayListener>
//                                 </Paper>
//                             </Grow>
//                         )}
//                     </Popper>
//                 </p>
//             </div>
//             <div>
//                 <Button onClick={handlePageTwoNavigation} disabled={selectedApps.length === 0}>
//                     Go to Dashboard
//                 </Button>
//             </div>
//         </Stack>
//     );
// };

// export default AppSelect;


import React, { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import axios from 'axios'; // Import axios for HTTP requests
import { useParams, useHistory } from 'react-router-dom'; // Import useHistory


const AppSelect = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const { selectedApps, addSelectedApp } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []); // Fetch data on component mount

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3002/selected-apps');
            const storedApps = response.data;
            storedApps.forEach(appName => addSelectedApp(appName));
        } catch (error) {
            console.error('Error fetching selected apps:', error);
        }
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleAppClick = (appName) => {
        addSelectedApp(appName);
        setOpen(false);
        axios.post('http://localhost:3002/selected-apps', { appName })
            .catch(error => console.error('Error storing selected app:', error));
    };

    const handlePageTwoNavigation = () => {
        if (selectedApps.length > 0) {
            const selectedAppsParam = selectedApps.join('+');
            navigate(`/PageTwo/${selectedAppsParam}`);
        }
    };

    return (
        <Stack direction="column" spacing={2}>
            <div>
                <p>
                    <HomeWorkIcon /> Organization 01
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        variant="outlined"
                        fullWidth=""
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        View Apps
                    </Button>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="right-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left bottom' : 'left top',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            onKeyDown={(event) => {
                                                if (event.key === 'Tab') {
                                                    event.preventDefault();
                                                    setOpen(false);
                                                } else if (event.key === 'Escape') {
                                                    setOpen(false);
                                                }
                                            }}
                                        >
                                            {['Leave App', 'Salary App', 'Diary App'].map((appName) => (
                                                <MenuItem
                                                    key={appName}
                                                    onClick={() => handleAppClick(appName)}
                                                    disabled={selectedApps.includes(appName)}
                                                >
                                                    {appName}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </p>
            </div>
            <div>
                <Button onClick={handlePageTwoNavigation} disabled={selectedApps.length === 0}>
                    Go to Dashboard
                </Button>
            </div>
        </Stack>
    );
};

export default AppSelect;
