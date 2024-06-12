import { ThemeProvider } from "@emotion/react";
import theme from "../theme";
import Header from "../components/Header";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

export default function Layout({children}) {

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Box component="main">
                {children}
            </Box>
            <Footer />
        </ThemeProvider>
    )
}