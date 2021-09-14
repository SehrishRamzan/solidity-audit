import React from 'react'
import { Box, Container, useMediaQuery, Grid} from '@material-ui/core';
import vector1 from '../images/Vector 1.svg';
import Ellipse from '../images/Ellipse.svg';
import vector2 from '../images/Vector 2.svg';


function About() {

    const matches = useMediaQuery("(max-width:960px)");

    return <Box id='about' pt={6}>
        <Container maxWidth="lg">
            <Grid container justifyContent="space-between" spacing={1}>
                <Grid item xs={12} sm={6} md={6} style={{ position: "relative" }} >
                    <img src={vector1} width="364px" height="208px" />
                    <Box component='h1' fontWeight={700} style={{ textShadow: '6px 4px 0px #FFB800', position: 'relative', color: '#171834', fontWeight: 'bold', fontSize: '147px', bottom: '313px', left: '20px' }}>
                        A<span style={{ color: '#fff', fontSize: "37px", textShadow: 'none', fontWeight: '400', fontStyle: 'normal' }}>bout Us </span>
                        <img width="16px" height="16px" style={{ marginLeft: '10px' }} src={Ellipse} />
                    </Box>
                    <Box textAlign='left' maxWidth='446px' fontSize={{ xs: '16px', sm: '16px', lg: '20px' }} style={{ fontStyle: 'normal', position: 'relative', bottom: '42%', left: matches ? '15px' : '100px', fontWeight: '300' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Box>
                </Grid>
                
                <Grid item xs={12} sm={6} md={6} style={{ position: "relative", flexBasis:'32%', paddingBottom: '45px', left: matches ? '50px':'0px' }} >
                    <Box style={{ position: 'relative', top: '50px' }}>
                        <Box mt={4}>
                            <span style={{ color: '#FFB800' }}>Clients</span>
                                    <Box display='flex' justifyContent='center' alignItems='center' style={{ background: '#11122B', width: '264px', height: '101px', fontSize: "37px", borderRight: '2px solid #FFB800', borderBottom: '2px solid #FFB800' }}>1000+</Box>
                                </Box>

                                <Box mt={4}>
                                    <span style={{ color: '#FFB800' }}>Projects</span>
                                    <Box display='flex' justifyContent='center' alignItems='center' style={{ background: '#11122B', width: '264px', height: '101px', fontSize: "37px", borderRight: '2px solid #FFB800', borderBottom: '2px solid #FFB800' }}>1000+</Box>
                                </Box>

                                <Box mt={4}>
                                    <span style={{ color: '#FFB800' }}>Satisfaction</span>
                                    <Box display='flex' justifyContent='center' alignItems='center' style={{ background: '#11122B', width: '264px', height: '101px', fontSize: "37px", borderRight: '2px solid #FFB800', borderBottom: '2px solid #FFB800' }}>1000+</Box>
                                </Box>

                            </Box>
                            <img src={vector2} width="364px" height="208px" />
                </Grid>
            </Grid>
                       
                </Container>
            </Box>
}

            export default About
