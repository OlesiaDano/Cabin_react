import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers-pro';
import { Colors } from "../../styles";

export const BookingForm = styled('form')`
    flex: 1;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 11px;
    gap: 10px;
`

export const BookingField = styled(TextField)`
    background-color: ${Colors.dove_gray};
    color: ${Colors.dark};
    border-radius: 5px;
`

export const BookingDate = styled(DatePicker)`
    width: 49%;
    background-color: ${Colors.dove_gray};
    color: ${Colors.dark};
    border-radius: 5px;
`
