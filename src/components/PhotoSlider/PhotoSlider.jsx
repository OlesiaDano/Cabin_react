import React from 'react'
import { Dialog, DialogContent } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { ArrowNav } from './PhotoSlider.style';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles';

function PhotoSlider({
    selectedImage,
    closeLightbox,
    navigateToPreviousImage,
    navigateToNextImage,
}) {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Dialog
                    open={selectedImage !== null}
                    onClose={closeLightbox}
                    maxwidth="lg"
                    maxheight="lg"
                >
                    <DialogContent sx={{position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '20px 80px 20px 80px' }}>
                        <img src={selectedImage} alt="Selected Image" style={{ width: '100%', height: 'auto' }} />
                        <ArrowNav onClick={navigateToPreviousImage} sx={{ left: '10px'}}>
                            <ArrowBack />
                        </ArrowNav>
                        <ArrowNav onClick={navigateToNextImage} sx={{ right: '10px' }} >
                            <ArrowForward />
                        </ArrowNav>

                    </DialogContent>
                </Dialog >
            </ThemeProvider>
        </>
    )
}

export default PhotoSlider