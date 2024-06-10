
import { styled } from "@mui/material/styles";
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { Colors } from "../../styles";

export const DetailsBox = styled('div')`
    width: 90%;
    display: 'flex';
    flex-direction: 'column';
    justify-content: 'space-between';
    gap: 10px;
    color: ${Colors.white};
`
export const DetailsList = styled(List)`
    height: 35vh;
    overflow-y: auto;
    margin: 20px 0;
    padding: 0;
  
    &::-webkit-scrollbar {
    width: 10px;
    border-radius: 12px;
    background: ${Colors.primary};
  }
  
  &::-webkit-scrollbar-track {
    background: ${Colors.border};
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.primary};
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${Colors.light};
  }
`
export const DetailsSubheader = styled(ListSubheader)`
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: ${Colors.dove_gray};
    color: ${Colors.complementary};
`