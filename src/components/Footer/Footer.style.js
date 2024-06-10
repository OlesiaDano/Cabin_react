
import { styled } from "@mui/system";
import { Colors } from "../../styles";
import { Box, Typography } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
    height: '20px',
    display: 'flex',
    justifyContent: 'spase-between',
    padding: '40px 50px 20px',
    backgroundColor: `${Colors.dove_gray}`,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: '30px 50px 10px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '20px 20px 10px',
    },
}));


export const FooterCapture = styled(Typography)(({ theme }) => ({
    fontSize: '0.9rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
    }
}));