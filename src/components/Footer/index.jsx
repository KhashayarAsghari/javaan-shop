import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import FeatureItem from "./_components/FeatureItem";
import {
  AparatSvg,
  CartBlueSvg,
  DiamondWhiteSvg,
  ExpandMoreSvg,
  GroupsBlueSvg,
  HomeBlueSvg,
  InstagramSvg,
  LinkedInSvg,
  LoginBlueSvg,
  MoreBlueSvg,
  PhoneWhiteSvg,
  TelegramSvg,
  XSvg,
} from "../PublicComponents/SVGs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Footer() {
  return (
    <Box>
      {/* features section */}
      <Box
        maxWidth="1280px"
        marginX="auto"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={22}
        paddingTop={20}
        paddingBottom={20}
      >
        <FeatureItem
          title="ارسال رایگان سفارشات"
          desc="خرید بالای دو میلیون"
          image="/images/icons/FooterCart.svg"
        />

        <FeatureItem
          title="ضمانت بازگشت کالا"
          desc="تا 30 روز پس از خرید"
          image="/images/icons/FooterWarranty.svg"
        />

        <FeatureItem
          title="ضمانت اصالت کالا"
          desc="ابزار آلات اصیل و معتبر"
          image="/images/icons/FooterOriginality.svg"
        />

        <FeatureItem
          title="مشاوره تخصصی رایگان"
          desc="خرید آگاهانه ابزار آلات"
          image="/images/icons/FooterScope.svg"
        />

        <FeatureItem
          title="روش های پرداخت متنوع"
          desc="کلیه کارت های عضو شتاب"
          image="/images/icons/FooterPayment.svg"
        />
      </Box>

      {/* contact-us section */}
      <Box className="px-4" bgcolor="primary.500" paddingY="12px">
        <Box
          component="div"
          maxWidth="1280px"
          marginX="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* right section (title) */}
          <Box className="" display="flex" alignItems="center" gap="12px">
            <DiamondWhiteSvg />
            <Typography component="h2" variant="button1" color="white">
              مشاوران جوان استیل، بهترین راهنمای شما در خرید هستند.
            </Typography>
          </Box>

          <Box
            className="shrink-0 "
            display="flex"
            alignItems="center"
            gap="12px"
          >
            <Typography component="span" variant="subtitle1" color="white">
              021-8766
            </Typography>
            <PhoneWhiteSvg color="white" />
          </Box>
        </Box>
      </Box>

      {/* footer */}
      <Box bgcolor="neutral.800" paddingX={4} paddingY={16}>
        <Box
          component="div"
          maxWidth="1280px"
          marginX="auto"
          className="flex flex-col md:flex-row"
          rowGap={16}
          justifyContent="space-between"
          alignItems="stretch"
          alignContent="flex-start"
          flexWrap="wrap"
        >
          <Box width="100%" maxWidth="230px" className="hidden md:block">
            <Typography component="h4" variant="button1" color="primary.400">
              فروشگاه جوان استیل
            </Typography>
            <Box
              component="ul"
              marginTop={12}
              display="flex"
              flexDirection="column"
              gap={8}
            >
              <Typography component="li" variant="subtitle2" color="neutral.25">
                دسته‌بندی محصولات
              </Typography>
              <Typography component="li" variant="subtitle2" color="neutral.25">
                استعلام قیمت
              </Typography>
              <Typography component="li" variant="subtitle2" color="neutral.25">
                درخواست مشاوره
              </Typography>
              <Typography component="li" variant="subtitle2" color="neutral.25">
                فروشنده شوید
              </Typography>
              <Typography component="li" variant="subtitle2" color="neutral.25">
                درباره ما
              </Typography>
            </Box>
          </Box>

          <Box width="100%" maxWidth="230px" className="hidden md:block">
            <Typography component="h4" variant="button1" color="primary.400">
              خدمات مشتریان
            </Typography>
            <Box
              component="ul"
              marginTop={12}
              display="flex"
              flexDirection="column"
              gap={8}
            >
              <Typography component="li" variant="subtitle2" color="neutral.25">
                سوالات متداول
              </Typography>
              <Typography component="li" variant="subtitle2" color="neutral.25">
                قوانین و مقررات
              </Typography>
              <Typography component="li" variant="subtitle2" color="neutral.25">
                ثبت تخلف
              </Typography>
              <Typography component="li" variant="subtitle2" color="neutral.25">
                گزارش باگ
              </Typography>
              <Typography component="li" variant="subtitle2" color="neutral.25">
                ارتباط با ما
              </Typography>
            </Box>
          </Box>

          {/* socials */}
          <Box
            className="w-full md:max-w-[260px] flex flex-wrap justify-center md:justify-start"
            alignContent="flex-start"
            gap={6}
          >
            <AparatSvg />
            <XSvg />
            <LinkedInSvg />
            <InstagramSvg />
            <TelegramSvg />
          </Box>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreSvg />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "neutral.700",
                borderRadius: "8px",
                padding: "0px 24px",
              }}
            >
              <Typography component="h5" variant="button1" color="primary.400">
                فروشگاه جوان استیل
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                component="ul"
                paddingRight={8}
                marginTop={12}
                display="flex"
                flexDirection="column"
                gap={8}
              >
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  دسته‌بندی محصولات
                </Typography>
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  استعلام قیمت
                </Typography>
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  درخواست مشاوره
                </Typography>
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  فروشنده شوید
                </Typography>
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  درباره ما
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreSvg />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "neutral.700",
                borderRadius: "8px",
                padding: "0px 24px",
              }}
            >
              <Typography component="h5" variant="button1" color="primary.400">
                خدمات مشتریان
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                component="ul"
                paddingRight={8}
                marginTop={12}
                display="flex"
                flexDirection="column"
                gap={8}
              >
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  سوالات متداول
                </Typography>
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  قوانین و مقررات
                </Typography>
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  ثبت تخلف
                </Typography>
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  گزارش باگ
                </Typography>
                <Typography
                  component="li"
                  variant="subtitle2"
                  color="neutral.25"
                >
                  ارتباط با ما
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* logo and badges */}
          <Box
            className="w-full md:max-w-[260px] flex items-center"
            flexDirection="column"
            alignItems="flex-end"
          >
            {/* badges */}
            <Box className="w-full flex justify-center md:justify-end flex-wrap gap-2">
              <Box
                padding={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="white"
                borderRadius={2}
              >
                <img
                  src="/images/badges/e-namaad.png"
                  className="w-16 h-16 object-contain"
                />
              </Box>

              <Box
                padding={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="white"
                borderRadius={2}
              >
                <img
                  src="/images/badges/kasbokaar.png"
                  className="w-16 h-16 object-contain"
                />
              </Box>

              <Box
                padding={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="white"
                borderRadius={2}
              >
                <img
                  src="/images/badges/samandehi.png"
                  className="w-16 h-16 object-contain"
                />
              </Box>
            </Box>

            {/* logo */}
            <img
              src="/images/logos/footerLogo.png"
              alt=""
              className="w-40 opacity-30 mt-4 self-center"
            />
          </Box>
        </Box>

        {/* copyright */}
        <Typography
        marginBottom={30}
          component="p"
          variant="caption"
          color="white"
          className="w-full text-center"
          sx={{ marginTop: "16px" }}
        >
          تمام حقوق و محتویات متعلق به شرکت
          <Typography component="span" color="primary.400">
            &nbsp; جوان &nbsp;
          </Typography>
          استیل می‌باشد. ©۱۴۰۳
        </Typography>
      </Box>

      {/* mobile bottom navigation bar */}
      <Paper
      className="border-t-2 md:hidden"
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "white" }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
        //   value={value}
        //   onChange={(event, newValue) => {
        //     setValue(newValue);
        //   }}
        >
          <BottomNavigationAction sx={[{},{
            "& span": {
                color: "blue.400"
            }
          }]} label="صفحه اصلی" icon={<HomeBlueSvg />} />
          <BottomNavigationAction sx={[{},{
            "& span": {
                color: "blue.400"
            }
          }]} label="دسته بندی" icon={<GroupsBlueSvg />} />
          <BottomNavigationAction sx={[{},{
            "& span": {
                color: "blue.400"
            }
          }]} label="سبد خرید" icon={<CartBlueSvg />} />
          <BottomNavigationAction sx={[{},{
            "& span": {
                color: "blue.400"
            }
          }]} label="موارد بیشتر" icon={<MoreBlueSvg />} />
          <BottomNavigationAction sx={[{},{
            "& span": {
                color: "blue.400"
            }
          }]} label="حساب کاربری" icon={<LoginBlueSvg />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
