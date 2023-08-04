import { RegisterLocale } from "../types/types";
import en from "../locales/en/translation.json";
import es from "../locales/es/translation.json";

export const localesKeys = {
    EN: 'en-US',
    ES: 'es-ES',
};

export const registerLocales: RegisterLocale[] = [
    {
        key: localesKeys.EN,
        label: en.translation.locales["en-label"],
        icon: en.translation.locales["en-icon"],
    },
    {
        key: localesKeys.ES,
        label: es.translation.locales["es-label"],
        icon: es.translation.locales["es-icon"],
    },
];