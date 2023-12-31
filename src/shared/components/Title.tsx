import { AnimatePresence, motion } from 'framer-motion';

import { useMediaQuery } from 'react-responsive';
import useSectionContext from '@hooks/useSectionContext';
import { useTranslation } from 'react-i18next';

function Title() {
	const { section } = useSectionContext();
	const { t } = useTranslation('', { keyPrefix: 'title' });
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

	if (!section) return null;

	return (
		<AnimatePresence>
			<motion.h1
				key={section.name}
				initial={{ opacity: 0, y: 100, rotate: isMobile ? 0 : -90 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0 }}
				className={`fixed top-8 z-20 w-full origin-bottom-left text-center text-2xl font-bold xl:bottom-10 xl:left-[6.5rem] xl:top-auto xl:w-auto xl:text-5xl text-${section.color}`}
			>
				{t(section.name)}
			</motion.h1>
		</AnimatePresence>
	);
}

export default Title;
