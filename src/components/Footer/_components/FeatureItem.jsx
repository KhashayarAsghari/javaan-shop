import { Box, Typography } from "@mui/material";


export default function FeatureItem({ title, desc, image }) {
    return (
        <Box display="flex" alignItems="center" gap={4}>
            <Box
                component="img"
                sx={{
                    width: "48px",
                }}
                src={image}
            />

            <Box>
                <Typography component="h3" variant="button1" color="tertiary.700" className="whitespace-nowrap">{title}</Typography>
                <Typography component="span" variant="button2" color="tertiary.700" className="whitespace-nowrap">{desc}</Typography>
            </Box>
        </Box>
    )
}