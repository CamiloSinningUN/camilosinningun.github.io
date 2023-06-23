import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TextTransition, { presets } from 'react-text-transition';

function Hero() {
	const { t, i18n } = useTranslation('', { keyPrefix: 'hero' });
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			3000
		);
		return () => clearTimeout(intervalId);
	}, []);

	const TEXTS = useMemo(() => [t('web'), t('mobile')], [i18n.language]);

	const heroVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
	};

	return (
		<motion.div
			variants={heroVariants}
			initial="hidden"
			animate="visible"
			className="flex h-screen flex-col justify-center"
		>
			<p className="text-xl text-softCyan">{t('greetings')}</p>
			<h1 className="mt-8 text-6xl font-bold text-white">
				Camilo Sinning.
			</h1>
			<h2 className="mb-8 mt-2 flex text-6xl font-bold text-white opacity-50">
				{t('subtitle')}{' '}
				<TextTransition springConfig={presets.wobbly} className="ml-3">
					{TEXTS[index % TEXTS.length]}
				</TextTransition>
				.
			</h2>
			<p className="opactity-80 w-[500px] text-xl text-white">
				{t('description')}
			</p>
			<motion.button
				className="mt-11 h-16 w-60 rounded-lg border border-white text-2xl font-bold text-white"
				whileHover={{
					scale: 1.05, // Increase the scale slightly on hover
					boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)', // Add a subtle shadow effect
					transition: { duration: 0.3, ease: 'easeInOut' } // Define the duration and easing of the animation
				}}
			>
				{t('button')}
			</motion.button>
		</motion.div>
	);
}

export default Hero;
