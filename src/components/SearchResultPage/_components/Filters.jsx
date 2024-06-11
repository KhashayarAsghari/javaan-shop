import { Delete, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Button, Checkbox, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { FiltersSvg } from "../../PublicComponents/SVGs";


export default function Filters() {
    const [isBrandsOpen, setIsBrandsOpen] = useState(false);
    const [isSellersOpen, setIsSellersOpen] = useState(false)

    const [checkedBrands, setCheckedBrands] = useState([]);
    const [checkedSellers, setCheckedSellers] = useState([]);


    const handleToggleBrands = (value) => () => {
        const currentIndex = checkedBrands.indexOf(value);
        const newChecked = [...checkedBrands];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedBrands(newChecked);
    };

    const handleToggleSellers = (value) => () => {
        const currentIndex = checkedSellers.indexOf(value);
        const newChecked = [...checkedSellers];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedSellers(newChecked);
    };

    return (
        <Box sx={{ padding: "24px 24px 16px 16px" }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="span" variant="button1" color="blue.500">
                    فیلترها
                </Typography>
                <FiltersSvg />
            </Box>
            
            <Button
                component="label"
                role={undefined}
                variant="text"
                tabIndex={-1}
                endIcon={<Delete />}
            >
                حذف فیلتر ها
                
            </Button>
            <List
                sx={{ width: '100%' }}
                component="aside"
            >

                {/* brands */}
                <ListItemButton sx={{ display: "flex", justifyContent: "space-between", padding: "0" }} onClick={() => setIsBrandsOpen(!isBrandsOpen)}>
                    <ListItemText sx={{ textAlign: "start" }} primary="برند" />

                    <ListItemIcon sx={{ minWidth: "min-content" }} >
                        {isBrandsOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                </ListItemButton>
                <Collapse in={isBrandsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {["سامسونگ", "ال جی", "دوو", "بوش", "شیائومی", "موتورولا"].map((item, index) => {
                            const labelId = `brands${index}`;
                            return (
                                <ListItemButton onClick={handleToggleBrands(item)} key={labelId} dense sx={{ display: "flex", justifyContent: "flex-start", gap: "8px" }}>
                                    <ListItemIcon sx={{ minWidth: "max-content" }}>
                                        <Checkbox
                                            size="small"
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                            checked={checkedBrands.indexOf(item) !== -1}
                                            sx={{
                                                color: "neutral.500",
                                                '&.Mui-checked': {
                                                    color: "success.500",
                                                }
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText sx={{ textAlign: "start" }} id={labelId} primary={item} />
                                </ListItemButton>
                            )
                        })
                        }
                    </List>
                </Collapse>


                {/* sellers */}
                <ListItemButton sx={{ display: "flex", justifyContent: "space-between", padding: "0" }} onClick={() => setIsSellersOpen(!isSellersOpen)}>
                    <ListItemText sx={{ textAlign: "start" }} primary="فروشنده" />

                    <ListItemIcon sx={{ minWidth: "min-content" }} >
                        {isSellersOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                </ListItemButton>
                <Collapse in={isSellersOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {["شخص", "مغازه دار", "فروشنده بد", "فروشنده خوب", "فروشنده 2", "فروشنده 1"].map((item, index) => {
                            const labelId = `sellers${index}`;
                            return (
                                <ListItemButton onClick={handleToggleSellers(item)} key={labelId} dense sx={{ display: "flex", justifyContent: "flex-start", gap: "8px" }}>
                                    <ListItemIcon sx={{ minWidth: "max-content" }}>
                                        <Checkbox
                                            size="small"
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                            checked={checkedSellers.indexOf(item) !== -1}
                                            sx={{
                                                color: "neutral.500",
                                                '&.Mui-checked': {
                                                    color: "success.500",
                                                }
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText sx={{ textAlign: "start" }} id={labelId} primary={item} />
                                </ListItemButton>
                            )
                        })
                        }
                    </List>
                </Collapse>


            </List>
        </Box>
    )
}