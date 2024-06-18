import { createTheme } from "@mui/material";
import { BorderColor, BorderStyle } from "@mui/icons-material";

const theme = createTheme({
  spacing: 2,
  palette: {
    primary: {
      400: "#FFB833",
      500: "#F96302",
    },
    blue: {
      400: "#3A77B5",
      500: "#0955A3",
    },
    neutral: {
      0: "#ffffff",
      25: "#F4F5F5",
      200: "#A0A3A6",
      600: "#4F5254",
      700: "#3B3D3F",
      800: "#252627",
      900: "#000",
    },
    tertiary: {
      50: "#D5E8EB",
      500: "#41818B",
      600: "#34676F",
      700: "#274D53",
    },
    danger: {
      500: "#D3302F",
    },
    success: {
      500: "#01A049",
    },
    background: "#252A3C",
  },
  direction: "rtl",
  typography: {
    fontFamily: "IRANSansXFaNum",
    button2: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "20.44px",
      '@media (max-width: 768px)': {
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '18px',
      },
    },
    button1: {
      fontFamily: "IRANSansXFaNum",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
    },
    caption: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "19.68px",
      '@media (max-width: 768px)': {
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: '15.7px',
      },
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "27.72px",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "23.52px",
      '@media (max-width: 768px)': {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '18px',
      },
    },
    h3: {
      fontWeight: 850,
      fontSize: "24px",
      lineHeight: "36px",
      '@media (max-width: 768px)': {
        fontWeight: 850,
        fontSize: '20px',
        lineHeight: '30px',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 64,
          fontSize: "18px",
          fontWeight: 400,
          borderRadius: 16,
          "@media (max-width:960px)": {
            borderRadius: 8,
            height: 48,
            fontSize: "14px",
            lineHeight: "24px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid #D5E8EB`,
          },
          "&.Mui-focused": {
            
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid #D5E8EB`,
              color: "#41818B",
            },
          },
        },
      },
    },
  },
});

export default theme;
