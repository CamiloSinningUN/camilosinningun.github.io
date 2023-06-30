import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const Languages = {
	en: { name: 'English' },
	es: { name: 'Español' },
	it: { name: 'Italiano' }
};

const useLanguage = () => {
	const { i18n } = useTranslation();

	const language = useMemo(
		() => Languages[i18n.language as keyof typeof Languages],
		[i18n.language]
	);

	const changeLanguage = () => {
		const newLanguage =
			i18n.language === 'en'
				? 'es'
				: i18n.language === 'es'
				? 'it'
				: 'en';
		i18n.changeLanguage(newLanguage);
	};

	return { language, changeLanguage };
};

export default useLanguage;
