import { Box, Typography } from "@mui/material";
import { SearchResultTitle } from "../PublicComponents/VisualComponents";
import { SortingSvg } from "../PublicComponents/SVGs";
import SortingItem from "./_components/SortingItem";
import ProductCard from "./_components/ProductCard";
import Filters from "./_components/Filters";
import { fridgeIntro } from "../../mockData";


export default function SearchResultPage() {

    function getSeparatedNumber(price) {

        let splitted = String(price).split("")
        let reversed = splitted.reverse().join("");
        let resultTemp = "";
        let count = 0;
        for (let i = 0; i < reversed.length; i++) {
            resultTemp += reversed[i];
            count++;
            if (count === 3) {
                resultTemp += ",";
                count = 0
            }
        }

        return resultTemp.split("").reverse().join("")
    }

    const resultsCount = getSeparatedNumber(24783);

    return (
        <>
            <SearchResultTitle path="جوان استیل / لوازم خانگی / یخچال" title="نتایج جستجو برای یخچال" />

            <Box maxWidth="1280px" marginX="auto" display="flex" gap={4} paddingBottom={20}>
                {/* filters */}
                <Box width="264px" flexShrink={0}>
                    <Filters />
                </Box>

                {/* results */}
                <Box width="100%" padding={16} sx={{border: "1px solid #DFE0E1"}} borderRadius={6}>
                    {/* sorting section */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={12}>
                        <Box display="flex" alignItems="center" gap={16}>
                            <Box display="flex" alignItems="center" gap={4}>
                                <SortingSvg />
                                <Typography component="span" color="blue.500" variant="button2">مرتب‌سازی:</Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={10}>
                                <SortingItem text="مرتبط ترین" isSelected />
                                <SortingItem text="پربازدید ترین" />
                                <SortingItem text="جدید ترین" />
                                <SortingItem text="پرفروش ترین" />
                            </Box>
                        </Box>

                        <Box>
                            <Typography component="span" color="neutral.500">{resultsCount}</Typography>
                            <Typography component="span" color="neutral.500" sx={{ marginRight: "4px" }}>کالا</Typography>
                        </Box>
                    </Box>

                    {/* results */}
                    <Box display="flex" flexWrap="wrap" alignItems="stretch">
                        {[...new Array(9)].map(() => (
                            <ProductCard
                                sale
                                image="/images/products/fridge.png"
                                title="یخچال و فریزر ساید بای ساید 30 فوتی ایکس ویژن مدل TS666-AWD/ASD"
                                store="فروشگاه برادران رضایی و شرکا"
                                itemsLeft={10}
                                rating={4.5}
                                offPercentage={20}
                                mainPrice={18000000}
                                offPrice={20000000}
                            />
                        ))}


                    </Box>


                </Box>
            </Box>

            <Box maxWidth="1280px" marginX="auto" display="flex" gap={16} paddingBottom={20} marginTop={40} justifyContent="space-between" alignItems="center">
                <Box>
                    <Typography component="h3" variant="h3" color="neutral.800">معرفی انواع ‌یخچال‌ها</Typography>
                    <Typography component="p" variant="body" color="neutral.800" sx={{marginTop: "16px"}}>{fridgeIntro}</Typography>
                </Box>
                <Box
                    component="img"
                    sx={{
                        width: "20%",
                        borderRadius: "4px",
                        maxWidth: "240px",
                    }}
                    src="/images/intro/fridge-details.png"
                />
            </Box>
        </>
    )
}