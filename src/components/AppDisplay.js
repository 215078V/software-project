
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
            await axios.delete(`http://localhost:3002/selected-apps/${appName}`);
            
            // Remove app from UI
            const updatedApps = selectedApps.filter(app => app.appName !== appName);
            setSelectedApps(updatedApps);
        } catch (error) {
            console.error('Error removing app:', error);
        }
    };

    return (
        <div>
            <h2>App Gallery:</h2>
            <div>
                {selectedApps.map((app, index) => (
                    <div key={index}>
                        <Button
                            sx={{ marginTop: '10px', marginLeft: '20px', marginBlock: '10px' }}
                            variant="contained"
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
