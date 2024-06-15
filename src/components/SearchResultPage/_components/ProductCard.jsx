// props: {
//     sale: Boolean = "فروش ویژه",
//     image: String = "آدرس عکس",
//     title: String = "عنوان محصول",
//     store: String = "اسم فروشگاه",
//     itemsLeft?: Number | undefined = 'تعداد آیتم های باقیمانده',
//     rating: number = "امتیاز",
//     offPercentage: number = "درصد تخفیف",
//     mainPrice: number = "قیمت اصلی",
//     offPrice: number = "قیمت با تخفیف"
// }

import { Box, Typography } from "@mui/material";
import { ShopSvg, StarSvg, ToomanSvg } from "../../PublicComponents/SVGs";

export default function ProductCard({
  sale,
  image,
  title,
  store,
  itemsLeft,
  rating,
  offPercentage,
  mainPrice,
  offPrice,
}) {
  function getSeparatedNumber(price) {
    let splitted = String(price).split("");
    let reversed = splitted.reverse().join("");
    let resultTemp = "";
    let count = 0;
    for (let i = 0; i < reversed.length; i++) {
      resultTemp += reversed[i];
      count++;
      if (count === 3) {
        resultTemp += ",";
        count = 0;
      }
    }

    return resultTemp.split("").reverse().join("");
  }

  const dividedMainPrice = getSeparatedNumber(mainPrice);
  const dividedOffPrice = offPrice ? getSeparatedNumber(offPrice) : "";

  return (
    <Box className="flex flex-row md:flex-col md:max-w-[301px] items-center md:items-center relative p-4">
      {/* image */}
      <Box width="max-content" display="flex" justifyContent="center">
        <Box
          component="img"
          className="max-w-[104px] md:max-w-[160px]"
          sx={{
            width: "100%",
          }}
          src={image}
        />
      </Box>

{/* description */}
      <Box className="">
        {/* title */}
        <Typography
          component="h2"
          variant="button2"
          color="neutral.900"
          className="line-clamp-2 pt-3"
        >
          {title}
        </Typography>

        {/* store name */}
        <Box
          width="100%"
          className="mt-2"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <ShopSvg />
          <Typography component="span" variant="caption" color="tertiary.600">
            {store}
          </Typography>
        </Box>

        {/* rating and left items count */}
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          marginTop={4}
          justifyContent={itemsLeft ? "space-between" : "flex-end"}
        >
          {itemsLeft && (
            <Typography component="span" variant="caption" color="danger.500">
              تنها {itemsLeft} عدد در انبار باقی مانده است.
            </Typography>
          )}

          <Box display="flex" alignItems="flex-start" gap={1}>
            <Typography component="span" variant="caption" color="success.500">
              {rating ? rating : "-"}/5
            </Typography>
            <StarSvg />
          </Box>
        </Box>

        {/* price */}
        <Box
          width="100%"
          display="flex"
          alignItems="flex-start"
          marginTop={4}
          justifyContent={offPercentage ? "space-between" : "flex-end"}
        >
          {offPercentage ? (
            <Typography
              component="span"
              variant="caption"
              className="rounded-md px-1 md:px-2"
              bgcolor="danger.500"
              color="white"
            >
              {offPercentage}%
            </Typography>
          ): ""}

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap={2}
          >
            <Box display="flex" alignItems="center" flexShrink={0} gap={2}>
              <Typography
                component="span"
                variant="button2"
                color="tertiary.600"
              >
                {offPercentage ? dividedOffPrice : dividedMainPrice}
              </Typography>
              <ToomanSvg />
            </Box>

            {offPercentage ? (
              <Typography
                component="span"
                variant="subtitle2"
                color="neutral.200"
                className="line-through"
              >
                {dividedMainPrice}
              </Typography>
            ): ""}
          </Box>
        </Box>
      </Box>

      <Typography
        component="span"
        variant="button2"
        color="primary.500"
        className={`absolute top-2 md:top-4 right-4 ${sale ? "" : "hidden"}`}
      >
        فروش ویژه
      </Typography>
    </Box>
  );
}
