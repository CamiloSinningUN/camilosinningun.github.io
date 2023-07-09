import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
				<p className="opactity-8 mx-auto w-full max-w-[500px] text-xl text-white lg:mx-0">
					{t('description')}
				</p>
			</motion.div>
			<motion.div
				variants={itemVariants}
				className="mx-auto mt-11 flex flex-col items-center gap-4 md:flex-row lg:mx-0"
			>
				<a href="#contactme">
					<button className="h-16 w-60 rounded-lg  bg-white text-2xl font-bold text-lightBlue transition delay-75 duration-200 ease-in-out hover:scale-105  hover:shadow-white">
						{t('button')}
					</button>
				</a>
				<div className="flex items-center gap-4">
					<a
						href="https://github.com/CamiloSinningUN"
						className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-white transition delay-75 duration-200 ease-in-out hover:scale-105"
						target="_blank"
					>
						<FaGithub size={45} color="white" />
					</a>
					<a
						href="https://www.linkedin.com/in/camilo-sinning-49613a241/"
						target="_blank"
						className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-white transition delay-75 duration-200 ease-in-out hover:scale-105"
					>
						<FaLinkedin size={45} color="white" />
					</a>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default Hero;
