import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";

import LanguageDetector from 'i18next-browser-languagedetector';

const resources = { es, en };

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;