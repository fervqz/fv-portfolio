import { Box, Container, Grid } from "@mui/material";
import ThemeSwitch from "../../common/ThemeSwitch/ThemeSwitch";
import LanguageSelector from "../../common/LanguageSelector/LanguageSelector";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#F0F0F0',
                padding: '2rem 0',
            }}>
            <Container>
                <Grid container display="flex" justifyContent="space-between">
                    <LanguageSelector />
                    <ThemeSwitch />
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;