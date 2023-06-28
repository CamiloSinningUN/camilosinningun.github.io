import { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import Item from './Item';
import Logo from '@images/Logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';
import useLanguage from '@hooks/useLanguage';
import { useTranslation } from 'react-i18next';

function Navbar() {
	const [showBackground, setShowBackground] = useState(false);
	const [showNavbar, setShowNavbar] = useState(false);
	const { t } = useTranslation('', { keyPrefix: 'navbar' });
	const { language, changeLanguage } = useLanguage();

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				delayChildren: 0,
				staggerChildren: 0.2
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
		<div className="fixed z-20 w-screen px-3 py-4 lg:px-11">
			<motion.nav
				className={`top-7 flex items-center justify-between px-4 py-3 lg:mx-11 ${
					showBackground &&
					'lg:rounded-lg lg:bg-black lg:bg-opacity-30 lg:shadow-lg lg:backdrop-blur-sm'
				}`}
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.a href="" variants={itemVariants}>
					<img
						className="w-10 lg:h-8 lg:w-8"
						src={Logo}
						alt="Camilo Sinning"
					/>
				</motion.a>
				<button
					className="lg:hidden"
					onClick={() => setShowNavbar(true)}
				>
					<RxHamburgerMenu className="h-8 w-8 text-white" />
				</button>
				<div
					className={`absolute right-0 top-0 flex h-screen w-3/5 flex-col items-center gap-9 bg-darkBlue text-base font-bold text-white shadow-lg transition delay-75 duration-200 ease-in-out lg:static lg:right-auto lg:top-auto lg:h-auto lg:w-auto lg:flex-row lg:bg-transparent lg:shadow-none ${
						showNavbar ? '' : 'translate-x-full lg:translate-x-0'
					}`}
				>
					<button
						className="m-5 self-start focus:scale-95 active:scale-95 lg:hidden"
						onClick={() => setShowNavbar(false)}
					>
						<AiOutlineClose className="h-8 w-8 text-white" />
					</button>
					<ul className="flex flex-col gap-9 text-center lg:flex-row">
						<Item variants={itemVariants}>
							<a href="#aboutme">{t('aboutme')}</a>
						</Item>
						{/* <Item variants={itemVariants}>
							<a href="#skills">{t('skills')}</a>
						</Item> */}
						<Item variants={itemVariants}>
							<a href="#projects">{t('projects')}</a>
						</Item>
						<Item variants={itemVariants}>
							<a href="#contactme">{t('contactme')}</a>
						</Item>
					</ul>

					<motion.div variants={itemVariants}>
						<a
							href="/files/CV_Camilo_Sinning.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white px-7 py-2 transition duration-150 hover:opacity-100"
						>
							<div className="absolute inset-0 -translate-x-96 bg-white transition duration-300 ease-in-out group-hover:translate-x-0" />
							<p className="z-10 text-white transition delay-100 duration-200 group-hover:text-black">
								{t('resume')}
							</p>
						</a>
					</motion.div>

					<div className="mt-auto flex w-full flex-col px-5 lg:hidden">
						<div className="h-0.5 w-full bg-white bg-opacity-50" />
						<button
							className="py-4 font-normal"
							onClick={changeLanguage}
						>
							{language.name}
						</button>
					</div>
				</div>
			</motion.nav>
			{showBackground && (
				<div className="mx-auto hidden h-[0.5px] w-3/4 bg-gradient-to-r from-veryDarkGray via-white to-veryDarkGray opacity-20 lg:static" />
			)}
		</div>
	);
}

export default Navbar;
