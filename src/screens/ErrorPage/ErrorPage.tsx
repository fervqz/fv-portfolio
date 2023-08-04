import Img404 from "../../assets/img/404.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Paths from "../../consts/paths";
import ScreenLayout from "../../components/common/Screenlayout/ScreenLayout";
import AppImage from "../../components/overrites/AppImage/AppImage";
import { useTranslation } from "react-i18next";

const ErrorPage: React.FC = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <ScreenLayout isContainer>
            <Stack direction="column" spacing={4} display="flex" justifyContent="center">


                {/* Desktop */}
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                }}>
                    <AppImage src={Img404} alt="Not found image" width='70%' />
                </Box>

                {/* Mobile */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <AppImage src={Img404} alt="Not found image" width='100%' />
                </Box>

                <Box display="flex" justifyContent="center">
                    <Typography variant="h4" textAlign="center" sx={{ textWrap: 'balance' }}>
                        {`${t('ErrorPage.message')} (${pathname})`}
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button
                        variant="contained"
                        disableElevation
                        onClick={() => navigate(Paths.HOME)}
                    >{t('ErrorPage.button')}</Button>
                </Box>

            </Stack>
        </ScreenLayout>
    );
};

export default ErrorPage;