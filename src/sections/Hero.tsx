import TextTransition, { presets } from 'react-text-transition';
import { useEffect, useMemo, useState } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Hero() {
	const { t, i18n } = useTranslation('', { keyPrefix: 'hero' });
	const [index, setIndex] = useState(0);

	const TEXTS = useMemo(() => [t('web'), t('mobile')], [i18n.language]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				delayChildren: 1.5,
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { y: -20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		}
	};

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => index + 1),
			3000
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<motion.div
			className="flex h-auto min-h-screen flex-col text-center sm:justify-center lg:text-start"
			variants={containerVariants}
			initial={'hidden'}
			animate={'visible'}
		>
			<motion.div variants={itemVariants}>
				<p className="text-xl text-softCyan">{t('greetings')}</p>
			</motion.div>
			<motion.div variants={itemVariants}>
				<h1 className="mt-8 text-6xl font-bold tracking-tight text-white">
					Camilo Sinning.
				</h1>
			</motion.div>
			<motion.div variants={itemVariants}>
				<h2 className="mb-8 mt-4 flex flex-wrap justify-center gap-2 text-6xl font-bold tracking-tight text-white opacity-50 lg:mt-2 lg:justify-start">
					{t('subtitle')}{' '}
					<TextTransition
						springConfig={presets.wobbly}
						className="lg:ml-3"
					>
						{TEXTS[index % TEXTS.length]}
					</TextTransition>
					.
				</h2>
			</motion.div>
			<motion.div variants={itemVariants}>
				<p className="opactity-80 w-full max-w-[500px] text-xl text-white">
					{t('description')}
				</p>
			</motion.div>
			<motion.div variants={itemVariants}>
				<a href="#contactme">
					<button className="mt-11 h-16 w-60 rounded-lg border border-white text-2xl font-bold text-white transition delay-75 duration-200 ease-in-out hover:scale-105  hover:shadow-white">
						{t('button')}
					</button>
				</a>
			</motion.div>
		</motion.div>
	);
}

export default Hero;
