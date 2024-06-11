import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Colors } from "../../styles";


export const Banner = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    backgroundImage: 'url(../images/banner_main.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'auto',
    [theme.breakpoints.up('xl')]: {
        '@media (min-width: 1750px)': {
            backgroundPosition: '0px -190px',
        },
    },
}));

export const BannerContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `${Colors.transperent}`,
    color: `${Colors.dove_gray}`,
    width: 270,
    height: 270,
    margin: '30px auto',
    textAlign: 'center',
    borderRadius: '50%',
    position: 'relative',
    fontFamily: 'Helvetica',
    [theme.breakpoints.down('sm')]: {
        width: 200,
        height: 200,
    },
}));

export const BannerTitle = styled('h2')(({ theme }) => ({
    margin: '15px',
    lineHeight: '1.5',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
    },
}));

export const BannerSubtitle = styled(Typography)(({ theme }) => ({
    margin: '0',
    lineHeight: '1.6',
    fontSize: '1.25rem',
    fontWeight: '200',
    [theme.breakpoints.down('sm')]: {
        lineHeight: '1',
        fontSize: '0.9rem',
    },
}));