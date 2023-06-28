import { AnimatePresence, motion } from 'framer-motion';

import useSectionContext from '@hooks/useSectionContext';
import { useTranslation } from 'react-i18next';

function Title() {
	const { section } = useSectionContext();
	const { t } = useTranslation('', { keyPrefix: 'title' });

	if (!section) return null;

	return (
		<AnimatePresence>
			<motion.div
				key={section.name}
				initial={{ opacity: 0, y: 100, rotate: -90 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0 }}
				className={`fixed bottom-10 left-36 z-10 origin-bottom-left -rotate-90 text-7xl font-bold text-${section.color}`}
			>
				{t(section.name)}
			</motion.div>
		</AnimatePresence>
	);
}

export default Title;
