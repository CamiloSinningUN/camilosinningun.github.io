import { Variants, motion } from 'framer-motion';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Languages = {
	en: { name: 'English' },
	es: { name: 'Español' },
	it: { name: 'Italiano' }
};

interface Props {
	type: 'top' | 'bottom';
}

function LanguageSwitch({ type }: Props) {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(
		i18n.language === 'en'
			? Languages['en']
			: i18n.language === 'es'
			? Languages['es']
			: Languages['it']
	);

	const changeLanguage = () => {
		console.log(i18n.language);
		const newLanguage =
			i18n.language === 'en'
				? 'es'
				: i18n.language === 'es'
				? 'it'
				: 'en';
		i18n.changeLanguage(newLanguage);
		setLanguage(Languages[newLanguage]);
	};

	const containerVariants: Variants = {
		hidden: {
			opacity: 0,
			y: -50,
			rotate: type === 'top' ? 90 : -90
		},
		visible: { opacity: 1, y: 0, transition: { delay: 1 } }
	};

	return (
		<motion.div
			className={`fixed z-10 flex items-center ${
				type === 'top'
					? '-left-[8px] top-[180px] rotate-90'
					: 'bottom-[118px] right-0 -rotate-90'
			}`}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="mr-5 h-[0.5px] w-44 bg-white" />
			<button className="text-white" onClick={changeLanguage}>
				{language.name}
			</button>
		</motion.div>
	);
}

export default LanguageSwitch;
