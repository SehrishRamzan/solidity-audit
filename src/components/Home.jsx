import React from 'react';
import { Box, Button, Container, useMediaQuery } from '@material-ui/core';
import background from '../images/solidityBg.svg';
import Fade from 'react-reveal/Fade';

function Home() {
    const matches = useMediaQuery("(max-width:960px)");

    return <Box style={{ background: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center 100%", height: '962px', backgroundRepeat: "no-repeat", }}>
        <Container maxWidth='lg'>
            <Fade left>
                <Box maxWidth='522px' display='flex' flexDirection='column' justifyContent='space-between' alignItems='left' p={3}>
                    <Box color='primary' fontSize={{ xs: '30px', sm: '40px' }} component='h1' mt={25}>
                        Audit  and Analysis of Smart Contract
                    </Box>
                    <Box conponent='h2' mt={2} color='#fff' fontSize={{ xs: '18px', sm: '20px' }} fontWeight={400}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    </Box>
                    <Box mt={3}>
                        <Button style={{ background: 'linear-gradient(180deg, #FFB800 0%, #FFC42E 100%)', borderRadius: '66px', cursor: 'pointer', fontSize: matches ? '16px' : '20px', textTransform: 'capitalize', color: '#0B0B1E', border: 'none', width: matches ? "223px" : "333px", height: matches ? "41px" : "60px" }} >
                            Secure Your Project Now
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Container>
    </Box>
}

export default Home;
