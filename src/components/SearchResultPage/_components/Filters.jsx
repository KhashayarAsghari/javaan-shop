import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Button, Checkbox, Collapse, FormControl, FormControlLabel, Input, List, ListItemButton, ListItemIcon, ListItemText, Slider, Switch, Typography, useStepContext } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { DeleteSvg, FiltersSvg, ToomanSvg } from "../../PublicComponents/SVGs";
import { allBrands, allColors, allSellers, mostExpensiveProduct } from "../../../mockData";

// price range styles
const PriceRangeStyled = styled(Slider)(({ theme }) => ({
    color: '#34676F',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 16,
        width: 16,
        backgroundColor: '#34676F',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

// switch styles
const FastSendSwitch = styled(Switch)(({ theme }) => ({
    width: 32,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 4,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#34676F',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 8,
        height: 8,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

export default function Filters() {
    const [isBrandsOpen, setIsBrandsOpen] = useState(false);
    const [isSellersOpen, setIsSellersOpen] = useState(false);
    const [isColorsOpen, setIsColorsOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);

    const [priceRange, setPriceRange] = useState([0, mostExpensiveProduct])
    const [checkedBrands, setCheckedBrands] = useState([]);
    const [checkedSellers, setCheckedSellers] = useState([]);
    const [checkedColors, setCheckedColors] = useState([]);

    const [isFastSendChecked, setIsFastSendChecked] = useState(false);
    const [isAvailableProductsChecked, setIsAvailableProductsChecked ] = useState(false)


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

    const handleToggleColors = (value) => () => {
        const currentIndex = checkedColors.indexOf(value);
        const newChecked = [...checkedColors];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedColors(newChecked);
    };

    function handleFastSendChange() {
        setIsFastSendChecked(!isFastSendChecked)
    }

    function handlePriceRangeChange(event, newValue, activeThumb) {

        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPriceRange([newValue[0], priceRange[1]]);
        } else {

            setPriceRange([priceRange[0], newValue[1]]);
        }
    };

    return (

        <>
            <Box className="sticky top-3" sx={{ padding: "24px 24px 16px 16px" }}>


                <form className="w-full" onSubmit={(e) => e.preventDefault}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography component="span" variant="button1" color="blue.500">
                            فیلترها
                        </Typography>
                        <FiltersSvg />
                    </Box>


                    <Button className="w-full mt-2 flex justify-center gap-2 mx-auto" variant="text" color="error" endIcon={<DeleteSvg />}>
                        حذف فیلترها
                    </Button>

                    <Box>
                        {/* brands */}
                        <List sx={{ borderBottom: "1px solid #e0e0e0" }}>
                            <ListItemButton sx={{ display: "flex", justifyContent: "space-between", padding: "0" }} onClick={() => setIsBrandsOpen(!isBrandsOpen)}>
                                <ListItemText sx={{ textAlign: "start" }} variant="button2" primary="برند" />

                                <ListItemIcon sx={{ minWidth: "min-content" }} >
                                    {isBrandsOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemIcon>
                            </ListItemButton>
                            <Collapse in={isBrandsOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {allBrands.map((item) => {

                                        return (
                                            <ListItemButton onClick={handleToggleBrands(item.id)} key={item.id} dense sx={{ display: "flex", justifyContent: "flex-start", gap: "8px" }}>
                                                <ListItemIcon sx={{ minWidth: "max-content" }}>
                                                    <Checkbox
                                                        size="small"
                                                        edge="start"
                                                        tabIndex={-1}
                                                        disableRipple
                                                        checked={checkedBrands.indexOf(item.id) !== -1}
                                                        sx={{
                                                            color: "neutral.500",
                                                            '&.Mui-checked': {
                                                                color: "success.500",
                                                            }
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText sx={{ textAlign: "start" }} id={item.id} primary={item.titleFa} />
                                            </ListItemButton>
                                        )
                                    })
                                    }
                                </List>
                            </Collapse>
                        </List>

                        {/* sellers */}
                        <List sx={{ borderBottom: "1px solid #e0e0e0" }}>
                            <ListItemButton sx={{ display: "flex", justifyContent: "space-between", padding: "0" }} onClick={() => setIsSellersOpen(!isSellersOpen)}>
                                <ListItemText sx={{ textAlign: "start" }} variant="button2" primary="نام فروشنده" />

                                <ListItemIcon sx={{ minWidth: "min-content" }} >
                                    {isSellersOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemIcon>
                            </ListItemButton>
                            <Collapse in={isSellersOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {allSellers.map((item) => {

                                        return (
                                            <ListItemButton onClick={handleToggleSellers(item.id)} key={item.id} dense sx={{ display: "flex", justifyContent: "flex-start", gap: "8px" }}>
                                                <ListItemIcon sx={{ minWidth: "max-content" }}>
                                                    <Checkbox
                                                        size="small"
                                                        edge="start"
                                                        tabIndex={-1}
                                                        disableRipple
                                                        checked={checkedSellers.indexOf(item.id) !== -1}
                                                        sx={{
                                                            color: "neutral.500",
                                                            '&.Mui-checked': {
                                                                color: "success.500",
                                                            }
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText sx={{ textAlign: "start" }} id={item.id} primary={item.title} />
                                            </ListItemButton>
                                        )
                                    })
                                    }
                                </List>
                            </Collapse>
                        </List>

                        {/* colors */}
                        <List sx={{ borderBottom: "1px solid #e0e0e0" }}>
                            <ListItemButton sx={{ display: "flex", justifyContent: "space-between", padding: "0" }} onClick={() => setIsColorsOpen(!isColorsOpen)}>
                                <ListItemText sx={{ textAlign: "start" }} variant="button2" primary="رنگ" />

                                <ListItemIcon sx={{ minWidth: "min-content" }} >
                                    {isColorsOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemIcon>
                            </ListItemButton>
                            <Collapse in={isColorsOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {allColors.map((item) => {

                                        return (
                                            <ListItemButton onClick={handleToggleColors(item.id)} key={item.id} dense sx={{ display: "flex", justifyContent: "flex-start", gap: "8px" }}>
                                                <ListItemIcon sx={{ minWidth: "max-content" }}>
                                                    <Checkbox
                                                        size="small"
                                                        edge="start"
                                                        tabIndex={-1}
                                                        disableRipple
                                                        checked={checkedColors.indexOf(item.id) !== -1}
                                                        sx={{
                                                            color: "neutral.500",
                                                            '&.Mui-checked': {
                                                                color: "success.500",
                                                            }
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText sx={{ textAlign: "start" }} id={item.id} primary={item.titleFa} />

                                                <Box component="div" className="w-5 h-5 rounded-sm border-2 border-black" style={{ backgroundColor: item.colorCode }}></Box>
                                            </ListItemButton>
                                        )
                                    })
                                    }
                                </List>
                            </Collapse>
                        </List>


                        <FormControlLabel
                            className="flex flex-row-reverse justify-between w-full"
                            sx={{ margin: "0", padding: "8px 0", borderBottom: "1px solid #e0e0e0" }}
                            color=""
                            control={
                                <FastSendSwitch checked={isFastSendChecked} onChange={handleFastSendChange} name="isFastSendChecked" />
                            }
                            label="ارسال فوری"
                        />

                        {/* price range */}
                        <List sx={{ borderBottom: "1px solid #e0e0e0" }}>
                            <ListItemButton sx={{ display: "flex", justifyContent: "space-between", padding: "0" }} onClick={() => setIsPriceOpen(!isPriceOpen)}>
                                <ListItemText sx={{ textAlign: "start" }} variant="button2" primary="محدوده قیمت" />

                                <ListItemIcon sx={{ minWidth: "min-content" }} >
                                    {isPriceOpen ? <ExpandLess /> : <ExpandMore />}
                                </ListItemIcon>
                            </ListItemButton>
                            <Collapse in={isPriceOpen} timeout="auto" unmountOnExit>
                                <Box component="div" className="flex justify-between items-center gap-5">
                                    <FormControlLabel
                                        sx={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "8px", flexDirection: "row-reverse" }}
                                        control={<Input
                                            type="number"
                                            sx={[
                                                { width: "100%" },
                                                {
                                                    '& input': {
                                                        textAlign: "center"
                                                    },
                                                },
                                            ]}
                                            aria-label="price number input"
                                            placeholder=""
                                            value={priceRange[0]}
                                            onChange={(event) => setPriceRange([+event.target.value, priceRange[1]])}
                                        />}
                                        label="از"
                                    />

                                    <ToomanSvg />
                                </Box>

                                <Box component="div" className="flex justify-between items-center gap-5">
                                    <FormControlLabel
                                        sx={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "8px", flexDirection: "row-reverse" }}
                                        control={<Input
                                            type="number"
                                            sx={[
                                                { width: "100%" },
                                                {
                                                    '& input': {
                                                        textAlign: "center"
                                                    },
                                                },
                                            ]}
                                            aria-label="price number input"
                                            placeholder=""
                                            value={priceRange[1]}
                                            onChange={(event) => setPriceRange([priceRange[0], +event.target.value])}
                                        />}
                                        label="تا"
                                    />

                                    <ToomanSvg />
                                </Box>

                                <Box className="px-3">
                                    <PriceRangeStyled
                                        sx={{ marginTop: "1rem" }}
                                        value={priceRange}
                                        min={0}
                                        max={mostExpensiveProduct}
                                        color="#34676F"
                                        onChange={handlePriceRangeChange}
                                        valueLabelDisplay="auto"
                                        disableSwap
                                    />
                                </Box>
                                <Box component="div" className="flex justify-between w-full">
                                    <Typography component="span" variant="caption" color="tertiary.500">گرانترین</Typography>
                                    <Typography component="span" variant="caption" color="tertiary.500">ارزانترین</Typography>
                                </Box>
                            </Collapse>
                        </List>

                        {/* available products */}
                        <FormControlLabel
                            className="flex flex-row-reverse justify-between w-full"
                            sx={{ margin: "0", padding: "8px 0" }}
                            color=""
                            control={
                                <FastSendSwitch checked={isAvailableProductsChecked} onChange={() => setIsAvailableProductsChecked(!isAvailableProductsChecked)} name="isFastSendChecked" />
                            }
                            label="کالاهای موجود"
                        />
                    </Box>
                </form>

            </Box>

        </>
    )
}