
import { Box } from '@mui/material';

import LayOut from '../LayOut';
import AppDisplay from '../components/AppDisplay';




function PageTwo() {
    return (
        <div>

            {/* <Header /> */}
            <div style={{ display: 'flex' }} >
                {/* <VerticalNav /> */}
                <LayOut />
                <div style={{
                    display: 'flex',
                    margin: '100px 20px 20px 20px',
                    //  marginTop: 'calc(100% - 1px)' 

                }} >
                    <AppDisplay />


                </div>
            </div>


        </div>
    );
}

export default PageTwo;
