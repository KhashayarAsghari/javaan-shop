import { Box, Typography } from "@mui/material";


export default function FeatureItem({ title, desc, image }) {
    return (
        <Box className="flex flex-col md:flex-row items-center" gap={4}>
            <Box
                component="img"
                sx={{
                    width: "48px",
                }}
                src={image}
            />

            <Box>
                <Typography component="h4" variant="button2" color="tertiary.700" className="whitespace-nowrap">{title}</Typography>
                <Typography component="span" variant="subtitle2" color="tertiary.700" className="whitespace-nowrap">{desc}</Typography>
            </Box>
        </Box>
    )
}