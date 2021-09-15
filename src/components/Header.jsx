import React from 'react';
import { Box, Container, Hidden, useMediaQuery, IconButton, Drawer, Button, List, Divider, ListItem, ListItemText } from '@material-ui/core';
import soliditylogo from '../images/solidity audit.svg';
import { Link as LinkR } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkS } from 'react-scroll';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        background: '#171834',
    }
});

function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });
    const matches = useMediaQuery("(max-width:960px)");

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['about', 'advantages', 'services', 'contact'].map((text, index) => (
                    <ListItem button key={text}>
                        <LinkS to={text}><ListItemText primary={text} /></LinkS>
                    </ListItem>
                ))}
            </List>
            
        </div>
    );


    return <Box bgcolor='#171834' height='92px' boxShadow={1}>
        <Container maxWidth='lg'>
            <Box display='flex' justifyContent='space-between' alignItems='center' p={2}>
                <Box display='flex' justifyContent='space-between' alignItems='center' flexBasis='64%'>
                    <Box>
                        <img src={soliditylogo} width='272px' alt='not found' />
                    </Box>
                    <Hidden mdDown>
                        <Box fontSize='16px'>
                            <LinkS to='about' smooth={true} offset={50} duration={500}><LinkR to='about' style={{ textDecoration: 'none', color: '#fff' }} >About</LinkR></LinkS>
                        </Box>

                        <Box fontSize='16px'>
                            <LinkS to='advantages' smooth={true} offset={50} duration={500}><LinkR to='advantages' style={{ textDecoration: 'none', color: '#fff' }}>Advantages</LinkR></LinkS>
                        </Box>
                        <Box>
                            <Box fontSize='16px' display='flex' justifyContent='space-between' alignItems='center'>
                                <LinkS to='services' smooth={true} offset={50} duration={500}><LinkR to='services' style={{ textDecoration: 'none', color: '#fff' }}>Services</LinkR></LinkS>
                            </Box>
                        </Box>
                        <Box fontSize='16px'>
                            <LinkS to='process' smooth={true} offset={50} duration={500}><LinkR to='process' style={{ textDecoration: 'none', color: '#fff' }}>Process</LinkR></LinkS>
                        </Box>

                    </Hidden>
                </Box>

                <Box>
                    <Button style={{ background: '#FFB800', display: matches ? "none" : "block", fontSize: '18px', borderRadius: '9px', width: '228px', height: '45px', color: '#fff', border: 'none', textTransform: 'capitalize' }}>
                        <LinkS to='contact'>Get Free Consultancy</LinkS>
                    </Button>
                    <Hidden mdUp>
                        <IconButton>
                        {['right'].map((anchor) => (<React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>
                                    <MenuIcon
                                    style={{ fontSize: '38px', cursor: 'pointer', color: '#fff' }}>
                                    </MenuIcon>
                                </Button>
                                <Drawer anchor={anchor} classes={{ paper: classes.paper }} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment> ))}

                        </IconButton>
                    </Hidden>
                </Box>
            </Box>

        </Container>

    </Box>

}

export default Header;
