
import { Box } from '@mui/material';


import LayOut from '../LayOut';
import AppSelect from '../components/AppSelect';




function PageOne() {
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
                    <AppSelect />


                </div>
            </div>


        </div>
    );
}

export default PageOne;
