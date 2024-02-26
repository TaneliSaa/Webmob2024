import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Appbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button href='/' color="inherit">Etusivu</Button>
                        <Button href='/SormustenRitarit' color="inherit">Kirja1</Button>
                        <Button href='/KaksiTornia' color="inherit">Kirja2</Button>
                        <Button href='/KuninkaanPaluu' color="inherit">Kirja3</Button>
                        <Button href='/KyselyLomake' color="inherit">Kyselylomake</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export { Appbar };
