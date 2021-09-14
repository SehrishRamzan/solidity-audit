import React from 'react';
import { Box, Container, Grid, useMediaQuery} from '@material-ui/core';
import footer_bg from '../images/footer_bg.svg';
import footer_bg1 from '../images/footer_bg1.svg';
import footer_bg2 from '../images/footer_bg2.svg';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import {AiOutlineWechat} from 'react-icons/ai';
import {RiVoiceprintFill} from 'react-icons/ri';


function Footer() {
    const matches = useMediaQuery("(max-width:960px)");

    return <Box style={{ background: `url(${footer_bg})`, backgroundSize: "cover", backgroundPosition: "center 100%", height: matches ?'auto':'834px', backgroundRepeat: "no-repeat" }}>
        <Box style={{ background: `url(${footer_bg1})`, backgroundSize: "cover", backgroundPosition: "center 100%", height:  matches ?'auto':'834px', backgroundRepeat: "no-repeat" }}>
            <Container maxWidth='lg' style={{position: 'relative', top:'180px'}}>
                <Grid container style={{ alignItems: "center" }} spacing={3} >
                    <Grid item xs={12} sm={6} md={3} style={{ position: "relative" }} p={2}>
                        <Box component='h3'  style={{width: '144px', height: '98px',fontSize:'20px',color:"#fff",display: 'flex',textAlign:'center', justifyContent:'center', background: 'rgba(255, 255, 255, 0.1)'}}>Logo Here</Box>
                        <Box component='p' style={{fontSize: '16px'}}>Copyright ©2021 by SolidityAudit All Rights Reserved.</Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ position: "relative" }} p={2}>
                        <Box component='h3' style={{width: '144px', height: '98px',fontSize:'20px',color:'#FFB800' }}>Services</Box>
                        <Box component='p' style={{fontSize: '16px'}}>Security Audit </Box>
                        <Box component='p' style={{fontSize: '16px'}}>Consultancy</Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ position: "relative" }} p={2}>
                        <Box component='h3' style={{width: '144px', height: '98px',fontSize:'20px',color:'#FFB800' }}>Community</Box>
                        <Box component='p' style={{fontSize: '16px'}}><TwitterIcon  style={{marginRight:'5px'}}/>Twitter</Box>
                        <Box component='p' style={{fontSize: '16px'}}><LinkedInIcon  style={{marginRight:'5px'}}/>Linkedin</Box>
                        <Box component='p' style={{fontSize: '16px'}}><AiOutlineWechat  style={{marginRight:'5px', width:'20px'}}/>Wechat</Box>
                        <Box component='p' style={{fontSize: '16px'}}><GitHubIcon  style={{marginRight:'5px'}}/>Github</Box>
                        <Box component='p' style={{fontSize: '16px'}}><RiVoiceprintFill  style={{marginRight:'5px'}}/>Medium</Box>


                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{ position: "relative" }} p={2}>
                        <Box component='h3' style={{width: '144px', height: '98px',fontSize:'20px',color:'#FFB800' }}>Contact Us</Box>
                        <Box component='p' style={{fontSize: '16px'}}><LocationOnSharpIcon style={{marginRight:'5px'}}/>Your Address here, Turkey</Box>
                        <Box component='p' style={{fontSize: '16px'}}><PhoneSharpIcon  style={{marginRight:'5px'}}/>+92 347 8811355</Box>
                        <Box component='p' style={{fontSize: '16px'}}><MailOutlineSharpIcon  style={{marginRight:'5px'}}/>info@solidityaudit.com</Box>

                    </Grid>

                </Grid>
            </Container>
            <Box style={{ background: `url(${footer_bg2})`, backgroundSize: "cover", backgroundPosition: "center 100%", height: '200px', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'screen',position: 'relative',top: '292px'}}></Box>

        </Box>
    </Box>
}

export default Footer;
