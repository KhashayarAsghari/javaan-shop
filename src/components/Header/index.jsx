import { Box, Button, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";
import { CartSvg, ChevronDown, DiamondSvg, LoginSvg, PhoneSvg } from "../PublicComponents/SVGs";
import { Search } from "@mui/icons-material";

export default function Header() {


    return (
        <Box component="div">
            {/* top section */}
            <Box bgcolor="neutral.800" paddingY="12px">
                <Box component="div" maxWidth="1280px" marginX="auto" display="flex" justifyContent="space-between" alignItems="center">
                    {/* right section (title) */}
                    <Box display="flex" alignItems="center" gap="12px">
                        <DiamondSvg />
                        <Typography component="h2" variant="button1" color="white">مشاوران جوان استیل، بهترین راهنمای شما در خرید هستند.</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap="12px">
                        <Typography component="h2" variant="caption" color="white">تماس جهت خرید و مشاوره</Typography>
                        <Box display="flex" gap="4px" alignItems="center" marginLeft="16px">
                            <Typography component="span" variant="subtitle1" color="primary.500">021-8766</Typography>
                            <PhoneSvg />
                        </Box>
                    </Box>
                </Box>
            </Box>


            {/* main header section */}
            <Box padding="16px" sx={{ borderBottom: "1px solid #ddd" }}>
                <Box maxWidth="1280px" marginX="auto" display="flex" justifyContent="space-between" alignItems="center">
                    {/* right section (title) */}
                    <Box display="flex" alignItems="center" gap="12px">
                        <img src="/images/logos/logo-typed.png" width="137px" alt="" />

                        <TextField
                            label="محصول، برند یا دسته‌بندی مورد نظرتان را جستجو کنید."
                            fullWidth

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>

                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Box display="flex" alignItems="center" gap="8px">
                        <Button sx={{ padding: "0 24px" }} variant="text">
                            <LoginSvg />

                            <Typography marginRight="4px" variant="button2" color="blue.500">حساب کاربری</Typography>

                        </Button>

                        <CartSvg />
                    </Box>
                </Box>
            </Box>

            {/* header menu section */}
            <Box padding="10px" color="neutral.700" sx={{ boxShadow: "0px 2px 4px 0px #0000001F" }}>
                <Box component="nav" maxWidth="1280px" marginX="auto" display="flex" justifyContent="space-between" alignItems="center">
                    <List sx={{display: "flex"}}>
                        
                        <ListItem disablePadding sx={{whiteSpace: "nowrap"}}>
                            <ListItemButton>
                                <ListItemText sx={{marginLeft: "8px"}} primary="دسته بندی محصولات" />
                                <ListItemIcon sx={{minWidth: "min-content"}}>
                                    <ChevronDown />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{whiteSpace: "nowrap"}}>
                            <ListItemButton>
                                <ListItemText primary="درخواست مشاوره" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{whiteSpace: "nowrap"}}>
                            <ListItemButton>
                                <ListItemText primary="سوالات متداول" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{whiteSpace: "nowrap"}}>
                            <ListItemButton>
                                <ListItemText sx={{color: "#F96302"}} primary="استعلام قیمت" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Button variant="outlined" size="small" sx={{padding: "0 24px", border: "2px solid #0955A3", color: "#0955A3" }}>فروشنده شوید!</Button>
                </Box>
            </Box>
        </Box>

    )
}