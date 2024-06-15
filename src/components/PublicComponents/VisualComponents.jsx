import { Box, Typography } from "@mui/material";

export function SearchResultTitle({ path, title }) {

    return (
        <Box className="py-6 md:py-10 px-4 md:px-0">
            <Box maxWidth="1280px" marginX="auto">
                <Typography marginBottom="12px" component="h4" variant="subtitle2" color="neutral.600">{path}</Typography>
                <Typography component="h1" variant="h3" color="blue.500">{title}</Typography>
            </Box>
        </Box>
    )
}