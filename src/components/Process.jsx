import React from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import Ellipse from '../images/Ellipse.svg';

function Process() {
    return<Box  id='process' bgcolor='#0D0E24' height='auto' pt={10} pb={5}>
    <Container maxWidth="lg">
        <Box display='flex' flexDirection='column' flexBasis="30%" justifyContent='center' textAlign='center'>
            <Box  fontSize={{ xs: "30px", sm: "50px" , lg:'41px'}} color="#ff8b00" p={0}>
                Our <span style={{color:'#fff',fontWeight: '400', fontStyle:'normal'}}>Process</span>
                <img width="16px" height="16px" style={{marginLeft: '10px'}} src={Ellipse}/>
            </Box>
            <Grid container justifyContent="center" style={{ alignItems: "center",marginTop: '35px'}} spacing={1}>
                <Grid item xs={12} sm={6} md={2} style={{ position: "relative" }} >
                </Grid>
            </Grid>
        </Box>
    </Container>
    </Box>
}

export default Process;
