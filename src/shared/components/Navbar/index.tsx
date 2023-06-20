import Logo from '@images/Logo.png';
import Item from './Item';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Navbar() {
	const [showBackground, setShowBackground] = useState(false);
	const { t } = useTranslation('', { keyPrefix: 'navbar' });

	const navbarVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > window.innerHeight - 50) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="fixed z-10 w-full px-11 py-4">
			<motion.nav
				variants={navbarVariants}
				initial="hidden"
				animate="visible"
				className={`top-7 mx-11 flex items-center justify-between px-4 py-3 ${
					showBackground &&
					'rounded-lg bg-black bg-opacity-30 shadow-lg backdrop-blur-sm'
				}`}
			>
				<a href="">
					<img className="h-8 w-8" src={Logo} alt="Camilo Sinning" />
				</a>
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate="visible"
					className="auto flex items-center gap-9 text-base font-bold text-white"
				>
					<ul className="flex gap-9">
						<Item>
							<a href="#skills">{t('skills')}</a>
						</Item>
						<Item>
							<a href="#projects">{t('projects')}</a>
						</Item>
						<Item>
							<a href="#contactme">{t('contactme')}</a>
						</Item>
					</ul>

					<button className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white px-7 py-2 opacity-80 transition duration-150 hover:opacity-100">
						<div className="absolute inset-0 -translate-x-96 bg-white transition duration-300 ease-in-out group-hover:translate-x-0" />
						<a className="z-10 text-white transition delay-100 duration-200 group-hover:text-black">
							{t('resume')}
						</a>
					</button>
				</motion.div>
			</motion.nav>
			{showBackground && (
				<div className="mx-auto h-[0.5px] w-3/4 bg-gradient-to-r from-veryDarkGray via-white to-veryDarkGray opacity-20" />
			)}
		</div>
	);
}

export default Navbar;
