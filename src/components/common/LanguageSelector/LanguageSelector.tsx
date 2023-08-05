import { Box, MenuItem, Select as MuiSelect, Typography, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { registerLocales } from "../../../consts/locales";
import { StorageService } from "../../../services/storage.service";
import { storageKeys } from "../../../consts/storageKeys";

const Select = styled(MuiSelect)`
    padding: 5px 5px 5px 15px;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 6px;
    & div[role=button] {
        padding: 0px;
        margin: 0px;
    }
`;

const LanguageSelector = () => {

    const { i18n } = useTranslation();
    const storage = new StorageService();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        storage.setItem(storageKeys.SAVED_LOCALES, lng);
    };

    return (
        <div>
            <Select
                onChange={(event) => changeLanguage(event.target.value as string)}
                value={i18n.language}
                variant="outlined"
                color="primary"
                data-cy="input-select"
            >
                {registerLocales.map(locale => (
                    <MenuItem value={locale.key} data-cy="input-menu-item">
                        <Box display="flex" flexDirection="row" alignItems="center">
                            <Typography
                                component="span"
                                role="img"
                                aria-label={locale.label}
                                sx={{ fontSize: '1.2rem', marginRight: '5px', padding: '0px' }}
                            >{locale.icon}</Typography>
                            <Typography
                                component="span"
                                sx={{ fontSize: '0.8rem' }}
                            >{locale.label}</Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default LanguageSelector;