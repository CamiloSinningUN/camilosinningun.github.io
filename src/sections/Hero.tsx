import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TextTransition, { presets } from 'react-text-transition';

function Hero() {
	const { t, i18n } = useTranslation('', { keyPrefix: 'hero' });
	const [index, setIndex] = useState(0);

	const TEXTS = useMemo(() => [t('web'), t('mobile')], [i18n.language]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				delayChildren: 1.5,
				staggerChildren: 0.3
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
			className="flex h-screen flex-col justify-center"
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
				<h2 className="mb-8 mt-2 flex text-6xl font-bold tracking-tight text-white opacity-50">
					{t('subtitle')}{' '}
					<TextTransition
						springConfig={presets.wobbly}
						className="ml-3"
					>
						{TEXTS[index % TEXTS.length]}
					</TextTransition>
					.
				</h2>
			</motion.div>
			<motion.div variants={itemVariants}>
				<p className="opactity-80 w-[500px] text-xl text-white">
					{t('description')}
				</p>
			</motion.div>
			<motion.div variants={itemVariants}>
				<button className="mt-11 h-16 w-60 rounded-lg border border-white text-2xl font-bold text-white transition delay-75 duration-200 ease-in-out hover:scale-105  hover:shadow-white">
					{t('button')}
				</button>
			</motion.div>
		</motion.div>
	);
}

export default Hero;
