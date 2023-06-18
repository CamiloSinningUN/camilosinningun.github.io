import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import it from './locales/it.json';

const resources = {
    en: {
        translation: en
    },
    es: {
        translation: es
    },
    it: {
        translation: it
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });