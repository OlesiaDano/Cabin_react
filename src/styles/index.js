import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#3e778e",
  secondary: "#3e8e7d",
  transperent: "rgba(0, 18, 6, 0.51)",
  milky: "rgba(244, 250, 248, 0.51)",
  success: "#4caf50",
  info: "#3e4f8e",
  complementary: "#8e553e",
  dark: "#22414d",
  light: "#98bccd",
  border: "#032d3b",
  inverse: "#e64e98",
  dove_gray: "#d5d5d5",
  white: "#fff",
  black: "#000",
};

const theme = createTheme ({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    // MuiDrawer: {
    //   styleOverrides: {
    //     paper: {
    //       background: Colors.dark,
    //       color: Colors.dove_gray,
    //       borderRadius: "0px 10px 10px 0px",
    //       borderRight: `1px solid ${Colors.primary}`,
    //     },
    //   },
    // },
    // MuiDivider: {
    //   styleOverrides: {
    //     root: {
    //       borderColor: `1px solid ${Colors.dark}`,
    //     },
    //   },
    // },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: `${Colors.milky}`,
        },
      },
    },
    Mui: {
      styleOverrides: {
        focused: {
          color: Colors.complementary,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          fontSize: '0.8rem',
          color: `${Colors.complementary}`,
          background: 'inherit',
          padding: '0 5px',
          top: 0,
          left: 0,
          '&.Mui-focused': {
            color: `${Colors.primary}`,
          },
        },
      },
    },
  },
});

export default theme;
