import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { Colors } from '../../styles';

export const BookAndPricesTitle = styled(Typography)(({ theme }) => ({
    marginTop: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: `${Colors.dark}`,
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.4rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
    },
}));

export const BookingContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '20px',
    padding: '20px 40px',
    background: `${Colors.dark}`,
    color: `${Colors.dove_gray}`,
    [theme.breakpoints.down('md')]: {
        padding: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px',
    },
}));

export const BookingSubcontainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`