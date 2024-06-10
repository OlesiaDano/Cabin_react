import React from 'react'
import { FooterBox, FooterCapture } from './Footer.style';
import theme from '../../styles';

function Footer() {

    return (
        <FooterBox  theme={theme} component="footer" >
            <FooterCapture variant="body2" color="textSecondary">
                &copy; {new Date().getFullYear()} Tree-Tub Cabin. All rights reserved.
            </FooterCapture>
        </FooterBox>
    )
}

export default Footer