import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

const Appbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="inherit" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <Toolbar sx={{ justifyContent: isMobile ? 'center' : 'space-between' }}>
                        {!isMobile && (
                            <>
                                <Button href='/' color="inherit" sx={{ marginX: 1, fontSize: '1.2rem' }}>Etusivu</Button>
                                <Button href='/SormustenRitarit' color="inherit" sx={{ marginX: 1, fontSize: '1.2rem' }}>Kirja1</Button>
                                <Button href='/KaksiTornia' color="inherit" sx={{ marginX: 1, fontSize: '1.2rem' }}>Kirja2</Button>
                                <Button href='/KuninkaanPaluu' color="inherit" sx={{ marginX: 1, fontSize: '1.2rem' }}>Kirja3</Button>
                            </>
                        )}
                        <Button href='/KyselyLomake' color="inherit" sx={{ marginX: isMobile ? 2 : 0, fontSize: '1.2rem' }}>Kyselylomake</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export { Appbar };
