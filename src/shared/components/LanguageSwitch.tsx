import { Variants, motion } from 'framer-motion';

import useLanguage from '@hooks/useLanguage';

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
