import React from 'react';
import { Box, Container, Hidden, useMediaQuery, Button, IconButton } from '@material-ui/core';
import soliditylogo from '../images/solidity audit.svg';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';


function Header() {

    const matches = useMediaQuery("(max-width:960px)");

    return <Box bgcolor='#171834' height='92px' boxShadow={1}>
        <Container maxWidth='lg'>
            <Box display='flex' justifyContent='space-between' alignItems='center' p={2}>   
                <Box display='flex' justifyContent='space-between' alignItems='center' flexBasis='64%'>
                    <Box>
                        <img src={soliditylogo} width='272px' alt='not found' />
                    </Box>
                    <Hidden mdDown>
                        <Box fontSize='16px'>
                            <Link to='/' style={{ textDecoration: 'none', color: '#fff' }} >About</Link>
                        </Box>

                        <Box fontSize='16px'>
                            <Link to='/services' style={{ textDecoration: 'none', color: '#fff' }}>Advantages</Link>
                        </Box>
                        <Box>
                            <Box fontSize='16px' display='flex' justifyContent='space-between' alignItems='center'>
                                <Link to='/about' style={{ textDecoration: 'none', color: '#fff' }}>Services</Link>
                            </Box>
                        </Box>
                        <Box fontSize='16px'>
                            <Link to='/testimonials' style={{ textDecoration: 'none', color: '#fff' }}>Process</Link>
                        </Box>

                    </Hidden>
                </Box>

                <Box>
                    <Button style={{ background: '#FFB800', display: matches ? "none" : "block" ,fontSize:'18px',borderRadius: '9px',width: '228px',height: '45px',color: '#fff', border: 'none',textTransform: 'capitalize'}}>
                        Get Free Consultancy
                    </Button>
                    <Hidden mdUp>
                        <IconButton>
                            <MenuIcon
                                style={{fontSize: '38px', cursor: 'pointer', color: '#fff' }}>
                            </MenuIcon>
                        </IconButton>
                    </Hidden>
                </Box>
            </Box>

        </Container>

    </Box>
}

export default Header;
