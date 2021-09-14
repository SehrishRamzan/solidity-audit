import React from 'react';
import { Box, Container, Grid, Button , useMediaQuery} from '@material-ui/core';
import Ellipse from '../images/Ellipse.svg';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import contact from '../images/contact.svg';
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90%',
            color: '#fff'
        },
    },
}));

function Contact() {
    const classes = useStyles();
    const matches = useMediaQuery("(max-width:960px)");

    return <Box  id='contact' height='auto'pt={10} pb={5}>
        <Container maxWidth="lg" >
            <Fade bottom>
            <Box display='flex' flexDirection='column' flexBasis="30%" justifyContent='center' textAlign='center'>
                <Box component='h1' fontWeight={700} style={{ zIndex:'100',position: 'relative',top: '232px',textShadow: ' 6px 4px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontSize: '147px' }}>
                    C<span style={{ marginRight: '5px', color: '#fff', fontSize: "37px", textShadow: 'none', fontWeight: '400', fontStyle: 'normal' }}>onsultancy</span>
                    <img width="16px" height="16px" style={{ marginLeft: '10px' }} src={Ellipse} />
                </Box>
                <Grid container justifyContent="center"  style={{ alignItems: "center", marginTop: '35px',background: '#1d1f38' }} spacing={1}>
                    <Grid item xs={12} sm={6} md={6} style={{ position: "relative" ,paddingTop: matches ? '50px': '0px'}}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" style={{width:'44%'}} color='#fff' label="Name" />
                            <TextField id="standard-basic" style={{width:'44%'}}  label="Company Name" />
                            <TextField id="standard-basic" style={{width:'90%'}}  label="Email" />
                            <TextField id="standard-basic" label="Wechat, Telegram, Or Other" />
                            <TextareaAutosize aria-label="minimum" style={{ background: 'transparent', border: '2px solid black', height: '200px',width:'89%', marginLeft:'7px' }} minRows={5} placeholder="Additional Message" />

                            <Button bgcolor="#3B385A" style={{ textTransform: 'capitalize', boxShadow: '3px 3px 0px 4px #171834', borderRadius: '106px', fontSize: '20px', width: '292px',height: '74px'}}>Booked Now</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} style={{ position: "relative" }} >
                        <img src={contact} style={{width: matches ? '453px': 'auto'}} />
                    </Grid>
                </Grid>
            </Box>
            </Fade>
        </Container>
    </Box>
}

export default Contact
