import React from 'react';
import { AppBar, Typography, Grow, Grid, Container } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';

import mercedes from './images/mercedes.png';


const App =() => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Mercedes Pics</Typography>
                <img src={mercedes} alt="Mercedes logo" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>


                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;