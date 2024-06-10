import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import { Colors } from '../../styles';

export const ContactsTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
    },
}));

export const ContactsSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.3rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
    },
}));

export const ContactsText = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '0.9rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
    },
}));

export const ContactsContainer = styled(Grid)(({ theme }) => ({
    justifyContent: 'space-between',
    marginTop: '20px',
    padding: '20px 40px 40px',
    background: `${Colors.dark}`,
    color: `${Colors.dove_gray}`,
    [theme.breakpoints.down('sm')]: {
        padding: '20px 40px',
    },
}));

export const ContactsSubcontainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'space-around',
    },
}))