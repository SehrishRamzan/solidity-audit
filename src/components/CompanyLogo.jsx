import React from 'react';
import { Box, Grid, Container, useMediaQuery } from "@material-ui/core";
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';
import image3 from '../images/image3.svg';
import image4 from '../images/image4.svg';
import image from '../images/image.svg';
import image5 from '../images/image5.svg';
import Fade from 'react-reveal/Fade';



function CompanyLogo() {
    const matches = useMediaQuery("(max-width:960px)");

    return <Box bgcolor="#11122B" mt={-40}>
        <Container maxWidth='lg'>
            <Fade top>
            <Grid container justifyContent="space-between" alignItems='center' spacing={1} style={{ marginTop: '90px' }} >
                <Grid item xs={4} sm={4} md={2} style={{ position: "relative" }} >
                    <img src={image1} width={matches ? '103px':'200px'} height={matches?'69px':'154px'} />
                </Grid>
                <Grid item xs={4} sm={4} md={2} style={{ position: "relative" }} >
                    <img src={image2} width={matches? '64px':'200px'} height={matches? '15px':'36px'} />
                </Grid>
                <Grid item xs={4} sm={4} md={2} style={{ position: "relative" }} >
                    <img src={image4} width={matches ? '106px':'200px'} height={matches ? '79px':"178px"} />

                </Grid>
                <Grid item xs={4} sm={4} md={2} style={{ position: "relative" }} >
                    <img src={image5} width={matches ? '77px':"150px"} height={matches ? '9px':"24px"} />

                </Grid>
                <Grid item xs={4} sm={4} md={2} style={{ position: "relative" }} >
                    <img src={image} width={matches ? '46px':"100px"} height={matches ? '18px':"48px"} />

                </Grid>
                <Grid item xs={4} sm={2} md={2} style={{ position: "relative" }} >
                    <img src={image3} width={matches ? '64px':"140px"} height={matches ? '43px':"109px"} />

                </Grid>
            </Grid>
        </Fade>
        </Container>
    </Box>
}

export default CompanyLogo;
