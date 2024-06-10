
import { styled } from "@mui/material/styles";
import { List, ListItem } from '@mui/material';
import { Link } from "@mui/material";
import { Colors } from "../../styles";

export const SocialLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: inherit;
`

export const SocialList = styled(List)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: space-between;
    margin-top: 20px;
`

export const SocialItem = styled(ListItem)`
    display: flex;
    justify-content: center;
    width: 2em;
    height: 2em;
    padding: 4px;
    &:hover {
        background-color: ${Colors.light};
        border-radius: 50%;
    }
`
