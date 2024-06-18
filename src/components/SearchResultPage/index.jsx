import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { SearchResultTitle } from "../PublicComponents/VisualComponents";
import { SortingSvg } from "../PublicComponents/SVGs";
import SortingItem from "./_components/SortingItem";
import ProductCard from "./_components/ProductCard";
import Filters from "./_components/Filters";
import { fridgeIntro } from "../../mockData";
import FilterListIcon from "@mui/icons-material/FilterList";
import TuneIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SearchResultPage() {
  function getSeparatedNumber(price) {
    let splitted = String(price).split("");
    let reversed = splitted.reverse().join("");
    let resultTemp = "";
    let count = 0;
    for (let i = 0; i < reversed.length; i++) {
      resultTemp += reversed[i];
      count++;
      if (count === 3 && i < reversed.length - 1) {
        resultTemp += ",";
        count = 0;
      }
    }

    return resultTemp.split("").reverse().join("");
  }

  const resultsCount = getSeparatedNumber(247832);

  return (
    <>
      <SearchResultTitle
        path="جوان استیل / لوازم خانگی / یخچال"
        title="نتایج جستجو برای یخچال"
      />

      <Box
        maxWidth="1280px"
        marginX="auto"
        display="flex"
        gap={4}
        paddingBottom={20}
      >
        {/* filters */}
        <Box width="264px" className="hidden md:block" flexShrink={0}>
          <Filters />
        </Box>

        {/* results */}
        <Box
          width="100%"
          className="border-0 md:border-2 p-2 md:p-8"
          borderRadius={6}
        >
          {/* sorting section */}
          <Box
            className="hidden md:flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={12}
          >
            <Box display="flex" alignItems="center" gap={16}>
              <Box display="flex" alignItems="center" gap={4}>
                <SortingSvg />
                <Typography component="span" color="blue.500" variant="button2">
                  مرتب‌سازی:
                </Typography>
              </Box>

              <Box display="flex" flexWrap="wrap" alignItems="center" gap={10}>
                <SortingItem text="مرتبط ترین" isSelected />
                <SortingItem text="پربازدید ترین" />
                <SortingItem text="جدید ترین" />
                <SortingItem text="پرفروش ترین" />
              </Box>
            </Box>

            <Box>
              <Typography component="span" color="neutral.500">
                {resultsCount}
              </Typography>
              <Typography
                component="span"
                color="neutral.500"
                sx={{ marginRight: "4px" }}
              >
                کالا
              </Typography>
            </Box>
          </Box>

          {/* mobile sorting and filter options */}
          <Box className="w-full md:hidden">
            <Box
              className="w-full overflow-x-auto text-sm"
              display="flex"
              alignItems="center"
              gap={4}
            >
              <List sx={{ display: "flex", width: "100%" }}>
                <ListItem
                  disablePadding
                  sx={{ whiteSpace: "nowrap", width: "max-content" }}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "min-content" }}>
                      <FilterListIcon />
                    </ListItemIcon>

                    <Typography
                      variant="button2"
                      color="neutral.800"
                      sx={{ marginRight: "8px" }}
                    >
                      مرتب سازی
                    </Typography>
                  </ListItemButton>
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{ whiteSpace: "nowrap", width: "max-content" }}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "min-content" }}>
                      <TuneIcon />
                    </ListItemIcon>
                    <Typography
                      variant="button2"
                      color="neutral.800"
                      sx={{ marginRight: "8px" }}
                    >
                      فیلترها
                    </Typography>
                  </ListItemButton>
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{
                    whiteSpace: "nowrap",
                    backgroundColor: "tertiary.600",
                    borderRadius: "1000000px",
                    width: "max-content",
                  }}
                >
                  <ListItemButton>
                    <Typography variant="button2" color="neutral.0">
                      ارسال فوری
                    </Typography>
                  </ListItemButton>
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{ whiteSpace: "nowrap", width: "max-content" }}
                >
                  <ListItemButton>
                    <Typography variant="button2" color="neutral.800" sx={{marginLeft: "8px"}}>
                      برند
                    </Typography>
                    <ListItemIcon sx={{ minWidth: "min-content" }}>
                      <ExpandMoreIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>

            <Box className="flex justify-between my-8 md:hidden px-6">
                <Typography component="span" variant="button2" color="neutral.500">
                    همه نتایج
                </Typography>

            <Box>
              <Typography component="span" color="neutral.500">
                {resultsCount}
              </Typography>
              <Typography
                component="span"
                color="neutral.500"
                sx={{ marginRight: "4px" }}
              >
                کالا
              </Typography>
            </Box>
            </Box>
          </Box>

          {/* results */}
          <Box className="flex flex-wrap items-stretch justify-center">
            {[...new Array(9)].map(() => {
              const off = (Math.floor(Math.random() * 2)) * 10;
              const mainPrice = Math.floor(Math.random() * 100) * 1000000;

              return (
                <ProductCard
                  sale={Math.floor(Math.random() * 2)}
                  image="/images/products/fridge.png"
                  title="یخچال و فریزر ساید بای ساید 30 فوتی ایکس ویژن مدل TS666-AWD/ASD"
                  store="فروشگاه برادران رضایی و شرکا"
                  itemsLeft={Math.ceil(Math.random() * 20)}
                  rating={(Math.floor(Math.random() * 100) / 20).toFixed(1)}
                  offPercentage={off}
                  mainPrice={mainPrice}
                  offPrice={(mainPrice / 100) * (100 - off)}
                />
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box
      className="hidden md:flex"
        maxWidth="1280px"
        marginX="auto"
        gap={16}
        paddingBottom={20}
        marginTop={40}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography component="h3" variant="h3" color="neutral.800">
            معرفی انواع ‌یخچال‌ها
          </Typography>
          <Typography
            component="p"
            variant="body"
            color="neutral.800"
            sx={{ marginTop: "16px" }}
          >
            {fridgeIntro}
          </Typography>
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
  );
}
