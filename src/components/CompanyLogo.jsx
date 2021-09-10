import React from 'react';
import { Box, Grid, Container } from "@material-ui/core";
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';
import image3 from '../images/image3.svg';
import image4 from '../images/image4.svg';
import image from '../images/image.svg';
import image5 from '../images/image5.svg';



function CompanyLogo() {
    return <Box  bgcolor="#11122B">
        <Container maxWidth='lg'>
        <Box height='176px'>
            {/* <marquee scrolldelay="0" direction="column"> */}
                <Grid container style={{ alignItems: "center", justifyContent: "space-between",flexWrap:'wrap' }}>
                    <Grid item xs={1} >
                        <img src={image1} width="200px" height="154px"/>

                    </Grid>
                    <Grid item xs={1} >
                        <img src={image2} width="200px" height="36px"  />
                    </Grid>
                    <Grid item xs={1} >
                        <img src={image4} width="200px" height="178px"  />

                    </Grid>
                    <Grid item xs={1} >
                        <img src={image5} width="150px" height="24px"/>

                    </Grid>
                    <Grid item xs={1} >
                        <img src={image} width="100px" height="48px"/>

                    </Grid>
                    <Grid item xs={1} >
                        <img src={image3} width="140px" height="109px" />

                    </Grid>
                </Grid>
            {/* </marquee> */}
        </Box></Container>
    </Box>
}

export default CompanyLogo;
