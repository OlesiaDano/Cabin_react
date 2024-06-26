import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { AppBar } from "@mui/material";

function Header() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <AppBar component="header" position="fixed" color="transparent" sx={{height: '120px', order: '2', paddingBottom: '15px', background: '#fafafa'}}>
      {isDesktop ? <DesktopMenu /> : <MobileMenu/>}
    </AppBar>
  );
}

export default Header;