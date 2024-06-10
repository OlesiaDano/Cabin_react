import { styled } from "@mui/material/styles";
import { Colors } from "../../styles";
import { Grid, Typography } from "@mui/material";

export const AboutBanner = styled('div')`
    width: 100%;
    height: auto;
    background-image: url(../images/about.jpg);
    background-position: 50% 90%;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
`

export const AboutHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '50px 100px',
    [theme.breakpoints.down('md')]: {
        fontSize: '4.5rem',
        padding: ' 120px 30px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        padding: ' 100px 30px',
    },
}));

export const AboutTitleWrapper = styled('div')(({ theme }) => ({
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
    },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    color: `${Colors.complementary}`,
    backgroundColor: `${Colors.milky}`,
    marginTop: '40px',
    padding: '10px',
    textAlign: 'left',
    borderRadius: '15px',
    [theme.breakpoints.down('md')]: {
        fontSize: '4.5rem',
        marginTop: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        marginTop: '10px',
    },
}));

export const AboutSubtitle = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    color: `${Colors.complementary}`,
    backgroundColor: `${Colors.milky}`,
    textAlign: 'left',
    marginTop: '2rem',
    padding: '10px',
    fontWeight: '500',
    borderRadius: '15px',
    [theme.breakpoints.down('md')]: {
        marginTop: '1rem',
        fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '0.5rem',
        fontSize: '1rem'
    },
}));

export const AboutContent = styled(Grid)(({ theme }) => ({
    width: '100%', 
    height: '100%', 
    alignItems: 'center',
    marginTop: '20px', 
    padding: '20px 40px',
    [theme.breakpoints.down('md')]: {
        padding: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px',
    },
}));

export const AboutInfo = styled(Grid)(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    textAlign: 'center',
    gap: '5%',
    [theme.breakpoints.down('sm')]: {
        gap: '1%',
    },
}));

export const AboutText = styled(Typography)(({ theme }) => ({
    flex: '1',
    fontSize: '1rem', 
    padding: '0 20px 20px',
    [theme.breakpoints.down('sm')]: {
        padding: '0',
    },
}))