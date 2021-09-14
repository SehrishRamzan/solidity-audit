import React from 'react'
import { Box, Container, Grid, useMediaQuery} from '@material-ui/core';
import Ellipse from '../images/Ellipse.svg';
import soliditybg2 from '../images/soliditybg2.svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fade from 'react-reveal/Fade';

function Services() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const matches = useMediaQuery("(max-width:960px)");

    return <Box  id='services' bgcolor='#0D0E24' pb={5}>
        <Container maxWidth="lg" >
            <Fade left>
            <Box display='flex' flexDirection='row' flexBasis="30%" justifyContent='left' style={{width: '100%'}}>
                <Box component='h1' mt={-13} fontWeight={700} style={{ textShadow: '6px 4px 0px #FFB800', color: '#171834', fontStyle: 'normal', fontWeight: 'bold', fontSize: '147px' }}>
                    S<span style={{ marginRight: '5px', color: '#fff', fontSize: "37px", textShadow: 'none', fontWeight: '400', fontStyle: 'normal' }}>ervice</span>
                    <img width="16px" height="16px" style={{ marginLeft: '10px' }} src={Ellipse} />
                </Box>

            </Box>
            </Fade>
            <Fade left>
            <Grid bgcolor='#0D0E24' container justifyContent="space-between" style={{ alignItems: "center" }}>
                
                <Grid item xs={12} sm={6} md={5} style={{ position: "relative" }}>
                    <Box position="relative">
                        <img src={soliditybg2} style={{ mixBlendMode: 'screen', width: matches ? '90%': '540px', maxHeight: '430px' }} />
                    </Box>
                </Grid>
                
                <Grid item xs={12} sm={6} md={5} style={{ position: "relative" }}>
                    <Box p={3} position="relative" style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '35px' }}>
                        Security Audit
                    </Box>
                    <List dense={dense}>
                        <ListItem>
                            <ListItemIcon>
                                <img src={Ellipse} width="16px" height="16px" style={{ color: '#FFB800' }} />
                            </ListItemIcon>
                            <ListItemText color='#8f8a8c' primary="Identify security problems and gaps, as well as system weaknesses." secondary={secondary ? 'Secondary text' : null} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={Ellipse} width="16px" height="16px" style={{ color: '#FFB800' }} />
                            </ListItemIcon>
                            <ListItemText color='#8f8a8c' primary="Establish a security baseline that future audits can be compared with." secondary={secondary ? 'Secondary text' : null} />

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={Ellipse} width="16px" height="16px" style={{ color: '#FFB800' }} />

                            </ListItemIcon>
                            <ListItemText color='#8f8a8c' primary="Comply with internal organization security policies." secondary={secondary ? 'Secondary text' : null} />

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={Ellipse} width="16px" height="16px" style={{ color: '#FFB800' }} />

                            </ListItemIcon>
                            <ListItemText color='#8f8a8c' primary="Comply with internal organization security policies." secondary={secondary ? 'Secondary text' : null} />

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={Ellipse} width="16px" height="16px" style={{ color: '#FFB800' }} />

                            </ListItemIcon>
                            <ListItemText color='#8f8a8c' primary="Comply with external regulatory requirements." secondary={secondary ? 'Secondary text' : null} />

                        </ListItem><ListItem>
                            <ListItemIcon>
                                <img src={Ellipse} width="16px" height="16px" style={{ color: '#FFB800' }} />

                            </ListItemIcon>
                            <ListItemText color='#8f8a8c' primary="Determine if security training is adequate." secondary={secondary ? 'Secondary text' : null} />

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={Ellipse} width="16px" height="16px" style={{ color: '#FFB800' }} />

                            </ListItemIcon>
                            <ListItemText color='#8f8a8c' primary="Identify unnecessary resources." secondary={secondary ? 'Secondary text' : null} />

                        </ListItem>
                    </List>
                </Grid>
                
            </Grid>
            </Fade>
        </Container>
    </Box>
}

export default Services
