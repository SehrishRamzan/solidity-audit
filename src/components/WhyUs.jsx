import React from 'react';
import { Box, Container, Grid, useMediaQuery } from '@material-ui/core';
import Ellipse from '../images/Ellipse.svg';
import Lines from '../images/lines.svg';
import box from '../images/boxes.svg';
import Flip from 'react-reveal/Flip';


function WhyUs() {
    const matches = useMediaQuery("(max-width:960px)");
    return <Box>
        <Flip left>
        <Container maxWidth='lg'>
            <Box display='flex' flexBasis="30%" justifyContent='center'>
                <Box component='h1' fontWeight={700} style={{ textShadow: '6px 4px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontSize: '147px' }}>
                    W<span style={{ marginRight: '5px', color: '#fff', fontSize: "37px", textShadow: 'none', fontWeight: '400', fontStyle: 'normal' }}>hy Us</span>
                    <img width="16px" height="16px" style={{ marginLeft: '10px' }} src={Ellipse} />
                </Box>
                <Box display='flex' justifyContent='center' position='relative' mt={20}>
                    <Box display={matches ? 'none' : 'block'}>
                        <img src={Lines} style={{ transform: 'matrix(-1, 1, 1, 1, 75, 140)' }} />
                        <img src={Lines} style={{ transform: 'matrix(-1, 0, 0, 1, -121, 149)' }} />
                        <img src={Lines} style={{ transform: 'matrix(-1, -1, -1, 1, -325, 150)' }} />
                    </Box>
                </Box> 
            </Box>
            <Grid container justifyContent= {matches ? 'center':'space-between'} spacing={1} style={{marginTop: matches ?  '0px':'90px'}} >
                <Grid item sm={12} md={4} style={{ position: "relative"}}>
                    <Box component='h1' fontWeight={700} style={{ position: 'absolute', top: matches ? '-119px' : '-85px', left: matches ? '27px' : '4px', textShadow: '2px 1px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontSize: '100px' }}>
                        01
                    </Box>
                    <Box margin='18px' textAlign='center' style={{ background: `url(${box})`, width: '325px', height: '290px' }}>

                        <Box component='h3' position='relative'pt={5} style={{ fontSize: '22px' }}>Secure and save</Box>
                        <Box component='p' style={{ fontSize: "15px", padding: '0px 21px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Box>
                    </Box>
                </Grid>
                <Grid item sm={12} md={4} style={{ position: "relative" }} >
                    <Box component='h1' fontWeight={700} style={{ position: 'absolute', top: matches ? '-115px' : '-86px', left:matches ?'27px':'0px', marginRight: '215px', textShadow: '2px 1px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontSize: '100px' }}>
                        02
                    </Box>
                    <Box margin='18px' textAlign='center' style={{ background: `url(${box})`, width: '325px', height: '290px' }}>

                        <Box component='h3' position='relative' pt={5} style={{ fontSize: '22px' }}>Fast</Box>
                        <Box component='p' style={{ fontSize: "15px", padding: '0px 21px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Box>
                    </Box>
                </Grid>
                <Grid item sm={12} md={4} style={{ position: "relative" }} >
                    <Box component='h1' textAlign='center' fontWeight={700} style={{ position: 'absolute', top: matches ? '-108px' : '-87px', right: matches ? '228px' : '296px', textShadow: '2px 1px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontSize: '100px' }}>
                        03
                    </Box>
                    <Box margin='18px' textAlign='center' style={{ background: `url(${box})`, width: '325px', height: '290px' }}>

                        <Box component='h3' position='relative' pt={5} style={{ fontSize: '22px' }}>Affordable</Box>
                        <Box component='p' style={{ fontSize: "15px", padding: '0px 21px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Box>
                    </Box>
                </Grid>
            </Grid>
            {/* <Box position='absolute' display='flex' flexBasis="30%" justifyContent='center' flexWrap='wrap' spacing={2} mt={matches ? 40: 75}>
                    <Box component='h1' fontWeight={700} style={{position: 'absolute',top: matches ? '-119px':'-105px',left: matches ? '100px':'12px',textShadow: '2px 1px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontSize: '100px' }}>
                        01
                    </Box>
                    <Box margin='18px' textAlign='center' style={{background: `url(${box})` , width:'325px', height:'290px'}}>
                        
                        <Box component='h3' position='relative' mt={6} style={{ fontSize:'22px'}}>Secure and save</Box>
                        <Box component='p' style={{fontSize:"15px", padding: '0px 21px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Box>
                    </Box>
                    <Box component='h1' fontWeight={700} style={{position: 'absolute',top: matches ? '216px':'-105px',marginRight: '215px',textShadow: '2px 1px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontSize: '100px' }}>
                        02
                    </Box>
                    <Box margin='18px' textAlign='center' style={{background: `url(${box})` , width:'325px', height:'290px'}}>
                        
                        <Box component='h3' position='relative' mt={6} style={{ fontSize:'22px'}}>Fast</Box>
                        <Box component='p' style={{fontSize:"15px", padding: '0px 21px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Box>
                    </Box>
                    <Box component='h1' textAlign='center' fontWeight={700} style={{position: 'absolute',top:matches ? '542px': '-105px',right:matches?  '319px':'231px',textShadow: '2px 1px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontSize: '100px' }}>
                        03
                    </Box>
                    <Box margin='18px' textAlign='center' style={{background: `url(${box})` , width:'325px', height:'290px'}}>
                        
                        <Box component='h3' position='relative' mt={6} style={{ fontSize:'22px'}}>Affordable</Box>
                        <Box component='p' style={{fontSize:"15px", padding: '0px 21px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Box>
                    </Box>
                </Box > */}

        </Container>
        </Flip>
    </Box>
}

export default WhyUs;
