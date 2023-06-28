import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Languages = {
	en: { name: 'English' },
	es: { name: 'Español' },
	it: { name: 'Italiano' }
};

const useLanguage = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(
		i18n.language === 'en'
			? Languages['en']
			: i18n.language === 'es'
			? Languages['es']
			: Languages['it']
	);

	const changeLanguage = () => {
		const newLanguage =
			i18n.language === 'en'
				? 'es'
				: i18n.language === 'es'
				? 'it'
				: 'en';
		i18n.changeLanguage(newLanguage);
		setLanguage(Languages[newLanguage]);
	};

	return { language, changeLanguage };
};

export default useLanguage;
