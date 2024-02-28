// import { useParams } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import CancelIcon from '@mui/icons-material/Cancel';



// const AppDisplay = () => {
//     const { appName } = useParams();
//     const selectedApps = appName.split('+'); // Split the parameter by '+'


//     const ProjectList = () => {
//         const [projects, setProjects] = useState([]);
    
//         useEffect(() => {
//             const fetchData = async () => {
//                 try {
//                     const response = await axios.get('http://localhost:3002/selected-apps');
                    
//                     setProjects(response.data);
//                 } catch (error) {
//                     console.error('Error fetching data:', error);
//                 }
//             };
    
//             fetchData();
//         }, []);

//     const handleCancel = async (appName) => {
//         try {
//             // Send a request to delete the app from the database
//             await axios.delete(`http://localhost:3002/selected-apps/${appName}`);
//             // Remove the app from the frontend state
//             const updatedApps = selectedApps.filter(app => app !== appName);
//             setProjects(updatedApps);
            
//         } catch (error) {
//             console.error('Error removing app:', error);
//         }
//     };
        
    
//     return (
//         <div>
//             <h2>
//                 App Gallery:
//             </h2>
//             <div>

                

//                 {/* Map through selectedApps and render a Button for each app */}
//                 {selectedApps.map((app, index) => (
//                     <div key ={index}>
//                         <Button
//                             key={app.id} // Use index as key (consider using unique IDs if available)
//                             sx={{ marginTop: '10px', marginLeft: '20px' }} // Adjust styling as needed
//                             variant="contained"
//                             endIcon={< CancelIcon/>}
//                            onClick={() => handleCancel(app)}
//                         >
//                             {app}
//                         </Button>
//                         {/* <CancelIcon onClick={() => handleCancel(app)} /> */}
//                     </div>
//                 ))}
//             </div>

           

//         </div>
//     );
// };

// // export default { AppDisplay
// //      , ProjectList
// //     };

// export default { AppDisplay, ProjectList };

    

// import { useParams } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import CancelIcon from '@mui/icons-material/Cancel';

// const AppDisplay = () => {
//     const { appName } = useParams();
//     const selectedApps = appName.split('+'); // Split the parameter by '+'

//     const ProjectList = () => {
//         const [projects, setProjects] = useState([]);
    
//         useEffect(() => {
//             const fetchData = async () => {
//                 try {
//                     const response = await axios.get('http://localhost:3002/selected-apps');
                    
//                     setProjects(response.data);
//                 } catch (error) {
//                     console.error('Error fetching data:', error);
//                 }
//             };
    
//             fetchData();
//         }, []);

//         const handleCancel = async (appName) => {
//             try {
//                 // Send a request to delete the app from the database
//                 await axios.delete(`http://localhost:3002/selected-apps/${appName}`);
//                 // Remove the app from the frontend state
//                 const updatedApps = selectedApps.filter(app => app !== appName);
//                 setProjects(updatedApps);
                
//             } catch (error) {
//                 console.error('Error removing app:', error);
//             }
//         };
            
//         return (
//             <div>
//                 <h2>
//                     App Gallery:
//                 </h2>
//                 <div>
//                     {/* Map through selectedApps and render a Button for each app */}
//                     {selectedApps.map((app, index) => (
//                         <div key ={index}>
//                             <Button
//                                 key={app.id} // Use index as key (consider using unique IDs if available)
//                                 sx={{ marginTop: '10px', marginLeft: '20px' }} // Adjust styling as needed
//                                 variant="contained"
//                                 endIcon={< CancelIcon/>}
//                                 //onClick={() => handleCancel(app)}
//                             >
//                                 {app}
//                             </Button>
//                             <CancelIcon onClick={() => handleCancel(app)} />

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <ProjectList />
//     );
// };

// export default AppDisplay;


import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const AppDisplay = () => {
    const { appName } = useParams();
    const [selectedApps, setSelectedApps] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3002/selected-apps');
            setSelectedApps(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCancel = async (appName) => {
        try {
            // Remove app from database
            await axios.delete(`/http://localhost:3002/selected-apps/${appName}`);
            
            // Remove app from UI
            const updatedApps = selectedApps.filter(app => app.appName !== appName);
            setSelectedApps(updatedApps);
        } catch (error) {
            console.error('Error removing app:', error);
        }
    };

    return (
        <div>
            <h2>
                App Gallery:
            </h2>
            <div>
                {selectedApps.map((app, index) => (
                    <div key={index}>
                        <Button
                            sx={{ marginTop: '10px', marginLeft: '20px' ,marginBlock:'10px'}}
                            variant="contained"
                            //endIcon={<CancelIcon />}
                            //onClick={() => handleCancel(app.appName)}
                        >
                            {app.appName}
                        </Button>
                        <CancelIcon onClick={() => handleCancel(app.appName)} />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppDisplay;
