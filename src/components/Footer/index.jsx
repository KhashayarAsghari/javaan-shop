import { Box, Typography } from "@mui/material";
import FeatureItem from "./_components/FeatureItem";
import { AparatSvg, DiamondWhiteSvg, InstagramSvg, LinkedInSvg, PhoneWhiteSvg, TelegramSvg, XSvg } from "../PublicComponents/SVGs";


export default function Footer() {
    return (
        <Box>
            {/* features section */}
            <Box maxWidth="1280px" marginX="auto" display="flex" flexWrap="wrap" justifyContent="center" gap={22} paddingTop={20} paddingBottom={20}>
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
            <Box bgcolor="primary.500" paddingY="12px">
                <Box component="div" maxWidth="1280px" marginX="auto" display="flex" justifyContent="space-between" alignItems="center">
                    {/* right section (title) */}
                    <Box display="flex" alignItems="center" gap="12px">
                        <DiamondWhiteSvg />
                        <Typography component="h2" variant="button1" color="white">مشاوران جوان استیل، بهترین راهنمای شما در خرید هستند.</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap="12px">

                        <Typography component="span" variant="subtitle1" color="white">021-8766</Typography>
                        <PhoneWhiteSvg color="white" />

                    </Box>
                </Box>
            </Box>

            {/* footer */}
            <Box bgcolor="neutral.800" paddingY={16}>
                <Box component="div" maxWidth="1280px" marginX="auto" display="flex" rowGap={16} justifyContent="space-between" alignItems="stretch" alignContent="flex-start" flexWrap="wrap">
                    <Box width="100%" maxWidth="230px">
                        <Typography component="h4" variant="button1" color="primary.400">فروشگاه جوان استیل</Typography>
                        <Box component="ul" marginTop={12} display="flex" flexDirection="column" gap={8}>
                            <Typography component="li" variant="subtitle2" color="neutral.25">دسته‌بندی محصولات</Typography>
                            <Typography component="li" variant="subtitle2" color="neutral.25">استعلام قیمت</Typography>
                            <Typography component="li" variant="subtitle2" color="neutral.25">درخواست مشاوره</Typography>
                            <Typography component="li" variant="subtitle2" color="neutral.25">فروشنده شوید</Typography>
                            <Typography component="li" variant="subtitle2" color="neutral.25">درباره ما</Typography>
                        </Box>
                    </Box>

                    <Box width="100%" maxWidth="230px">
                        <Typography component="h4" variant="button1" color="primary.400">خدمات مشتریان</Typography>
                        <Box component="ul" marginTop={12} display="flex" flexDirection="column" gap={8}>
                            <Typography component="li" variant="subtitle2" color="neutral.25">سوالات متداول</Typography>
                            <Typography component="li" variant="subtitle2" color="neutral.25">قوانین و مقررات</Typography>
                            <Typography component="li" variant="subtitle2" color="neutral.25">ثبت تخلف</Typography>
                            <Typography component="li" variant="subtitle2" color="neutral.25">گزارش باگ</Typography>
                            <Typography component="li" variant="subtitle2" color="neutral.25">ارتباط با ما</Typography>
                        </Box>
                    </Box>

                    {/* socials */}
                    <Box width="100%" maxWidth="260px" display="flex" flexWrap="wrap" alignContent="flex-start" justifyContent="flex-start" gap={6}>
                        <AparatSvg />
                        <XSvg />
                        <LinkedInSvg />
                        <InstagramSvg />
                        <TelegramSvg />
                    </Box>

                    {/* logo and badges */}
                    <Box width="100%" maxWidth="260px" display="flex" flexDirection="column" alignItems="flex-end" justifyContent="space-between">
                        {/* badges */}
                        <Box display="flex" justifyContent="flex-end" gap={4} flexWrap="wrap">
                            <Box padding={4} display="flex" justifyContent="center" alignItems="center" backgroundColor="white" borderRadius={2}>
                                <img
                                    src="/images/badges/e-namaad.png"
                                    className="w-16 h-16 object-contain"
                                />
                            </Box>

                            <Box padding={4} display="flex" justifyContent="center" alignItems="center" backgroundColor="white" borderRadius={2}>
                                <img
                                    src="/images/badges/kasbokaar.png"
                                    className="w-16 h-16 object-contain"
                                />
                            </Box>

                            <Box padding={4} display="flex" justifyContent="center" alignItems="center" backgroundColor="white" borderRadius={2}>
                                <img
                                    src="/images/badges/samandehi.png"
                                    className="w-16 h-16 object-contain"
                                />
                            </Box>
                        </Box>

                        {/* logo */}
                        <img src="/images/logos/footerLogo.png" alt="" className="w-40 opacity-30" />
                    </Box>
                </Box>

                {/* copyright */}
                <Typography component="p" variant="caption" color="white" className="w-full text-center" sx={{marginTop: "16px"}}>
                    تمام حقوق و محتویات متعلق به شرکت
                    <Typography component="span" color="primary.400">
                        &nbsp;
                        جوان
                        &nbsp;
                    </Typography>

                    استیل می‌باشد. ©۱۴۰۳
                </Typography>
            </Box>
        </Box>
    )
}