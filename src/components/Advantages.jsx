import React from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import Ellipse from '../images/Ellipse.svg';
import experience from '../images/experience.svg';
import innovation from '../images/innovation.svg';
import quality from '../images/quality.svg';
import happyclient from '../images/happyclient.svg';
import support from '../images/support.svg';
import Flip from 'react-reveal/Flip';

function Advantages() {
    return <Box id='advantages' bgcolor='#0D0E24' height='auto' pt={10} pb={5}>
    <Container maxWidth="lg">
        <Flip left>
        <Box display='flex' flexDirection='column' flexBasis="30%" justifyContent='center' textAlign='center'>
            <Box  fontSize={{ xs: "30px", sm: "50px" , lg:'41px'}} color="#ff8b00" p={0}>
                Our <span style={{color:'#fff',fontWeight: '400', fontStyle:'normal'}}>Advantages</span>
                <img width="16px" height="16px" style={{marginLeft: '10px'}} src={Ellipse}/>
            </Box>
            <Grid container justifyContent="center" style={{ alignItems: "center",marginTop: '35px'}} spacing={1}>
                <Grid item xs={12} sm={6} md={2} style={{ position: "relative" }} >
                    <Box p={3} position="relative" textAlign='center'>
                        <img src={experience} width="153px" height='153px' />
                    </Box>
                    <Box component="p" fontSize={{xs: "18px", sm:'20px',lg:"20px" }} >
                        Experience
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={2} style={{ position: "relative" }}>
                    <Box p={3} position="relative" textAlign='center'>
                        <img src={innovation} width="153px" height='153px' />
                    </Box>
                    <Box component="p" fontSize={{xs: "18px", sm:'20px',lg:"20px" }} >
                        Innovation
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={2} style={{ position: "relative" }}>
                    <Box p={3} position="relative" textAlign='center'>
                        <img src={quality} width="153px" height='153px' />
                    </Box>
                    <Box component="p" fontSize={{xs: "18px", sm:'20px',lg:"20px" }} >
                        Quality
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={2} style={{ position: "relative" }}>
                    <Box p={3} position="relative" textAlign='center'>
                        <img src={happyclient} width="153px" height='153px' />
                    </Box>
                    <Box component="p" fontSize={{xs: "18px", sm:'20px',lg:"20px" }} >
                        Happy Client
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={2} style={{ position: "relative" }}>
                    <Box p={3} position="relative" textAlign='center'>
                        <img src={support} width="153px" height='153px' />
                    </Box>
                    <Box component="p" fontSize={{xs: "18px", sm:'20px',lg:"20px" }} >
                        Support
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </Flip>
    </Container>
    </Box>
}

export default Advantages;
