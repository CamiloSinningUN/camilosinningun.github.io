import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
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

i18next.on('languageChanged', (lng) => {
	document.documentElement.lang = lng;
	const newPathname = `/${lng}`;
	if (window.location.pathname !== newPathname) {
		window.location.pathname = newPathname;
	}
});

const i18nOptions = {
	resources,
	whitelist: ['en', 'es', 'it'],
	detection: {
		order: ['path', 'localStorage', 'htmlTag', 'cookie'],
		caches: ['localStorage', 'cookie'],
		lookupFromPathIndex: 0
	},
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false
	}
};

i18next.use(initReactI18next).use(LanguageDetector).init(i18nOptions);
