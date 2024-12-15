import { createTheme } from "@mui/material";

const royalTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(250,186,1,1)", // Rich golden color
    },
    secondary: {
      main: "#A57D00", // A darker, complementary golden hue
    },
    background: {
      default: "#030303", // Fallback for non-gradient supporting elements
      paper: "#1A1A1A", // Slightly lighter for paper elements
      gradient: 'linear-gradient(135deg, #fcc300, #d08800)', // Gradient background
    },
    text: {
      primary: "#FFFFFF", // White text for readability
      secondary: "rgba(250,186,1,1)", // Golden for highlights or important text
    },
    divider: "#A57D00", // Darker golden for dividers
  },
  typography: {
    fontFamily: "'Georgia', 'serif'", // A more classic font for a royal feel
    h1: {
      color: "rgba(250,186,1,1)", // Golden for main headers
    },
    h2: {
      color: "#A57D00", // Darker gold for sub-headers
    },
    body1: {
      color: "#FFFFFF", // White for main body text
    },
    body2: {
      color: "#ffc529", // Light gray for secondary text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF", // Button text color
          backgroundColor: "rgba(250,186,1,1)", // Golden background for buttons
          '&:hover': {
            backgroundColor: "#A57D00", // Darker gold on hover
          },
        },
      },
    },
  },
});

export default royalTheme;
