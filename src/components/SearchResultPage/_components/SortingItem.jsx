import { Button } from "@mui/material";


export default function SortingItem({text, isSelected, onClick}) {
    
    const color = isSelected? "primary.500" : "neutral.800";
    return (
        <Button
            // onClick={onClick} 
            sx={[{padding: "0",
                height: "25px !important",
                color: color
            }, {
                "& span": {
                    height: "20px"
                }
            }]}
            variant="text"
            >
                {text}
        </Button>
    )
}