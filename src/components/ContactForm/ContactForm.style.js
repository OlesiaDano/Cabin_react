
import { styled } from "@mui/system";
import { Colors } from "../../styles";
import { TextField } from "@mui/material";

export const ContactField = styled(TextField)`
    width: 100%;
    text-align: center;
    color: ${Colors.complementary};
    background-color: ${Colors.dove_gray};
    margin-bottom: 15px;
    border-radius: 5px;
`