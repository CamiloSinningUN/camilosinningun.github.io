import { Variants, motion } from 'framer-motion';

import useLanguage from '@hooks/useLanguage';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
	type: 'top' | 'bottom';
}

function LanguageSwitch({ type }: Props) {
	const { language, changeLanguage } = useLanguage();

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
			className={`fixed z-10 hidden items-center lg:flex ${
				type === 'top'
					? 'left-[6.25rem] top-16 origin-top-left rotate-90'
					: 'bottom-56 right-[6.25rem] origin-top-right -rotate-90'
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
