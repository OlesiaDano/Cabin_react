import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Colors } from "../../styles";


export const Banner = styled('div')(({ theme }) => ({
    width: '100%',
    flex: 1,
    display: 'block',
    backgroundImage: 'url(../images/banner_main.jpg)',
    backgroundPosition: '50% -80px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    [theme.breakpoints.up('xl')]: {
        '@media (min-width: 1750px)': {
            backgroundPosition: '0px -190px',
        },
    },
}));

export const BannerContent = styled(Typography)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${Colors.transperent};
    color: ${Colors.dove_gray};
    width: 270px;
    height: 270px;
    margin: 30px auto;
    text-align: center;
    border-radius: 100%;
`

export const BannerTitle = styled('h2')`
    line-height: 1.5px;
    font-size: 2rem;
`
