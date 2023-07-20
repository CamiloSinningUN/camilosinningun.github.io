import { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import Item from './Item';
import Logo from '@images/Logo.png';
import { MdEmail } from 'react-icons/md';
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
		<nav className="fixed z-20 w-screen px-3 py-4">
			<motion.nav
				className={`top-7 flex items-center justify-between px-4 py-3 xl:mx-11 ${
					showBackground &&
					'xl:rounded-lg xl:bg-black xl:bg-opacity-30 xl:shadow-lg xl:backdrop-blur-sm'
				}`}
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.a href="" variants={itemVariants}>
					<img
						className="w-10 xl:h-8 xl:w-8"
						src={Logo}
						alt="Camilo Sinning"
						loading="lazy"
					/>
				</motion.a>
				<button
					className="xl:hidden"
					onClick={() => setShowNavbar(true)}
				>
					<RxHamburgerMenu className="h-8 w-8 text-white" />
				</button>
				<nav
					className={`absolute right-0 top-0 flex h-screen w-3/5 flex-col items-center gap-9 bg-darkBlue text-base font-bold text-white shadow-lg transition delay-75 duration-200 ease-in-out xl:static xl:right-auto xl:top-auto xl:h-auto xl:w-auto xl:flex-row xl:bg-transparent xl:shadow-none ${
						showNavbar ? '' : 'translate-x-full xl:translate-x-0'
					}`}
				>
					<button
						className="m-5 self-start focus:scale-95 active:scale-95 xl:hidden"
						onClick={() => setShowNavbar(false)}
					>
						<AiOutlineClose className="h-8 w-8 text-white" />
					</button>
					<ul className="flex flex-col gap-9 text-center xl:flex-row">
						<Item
							variants={itemVariants}
							href="#aboutme"
							content={t('aboutme')}
						/>
						<Item
							variants={itemVariants}
							href="#projects"
							content={t('projects')}
						/>
						<Item
							variants={itemVariants}
							href="#contactme"
							content={t('contactme')}
						/>
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

					<div className="mt-auto flex w-full flex-col px-5 xl:hidden">
						<div className="mx-auto mb-3 flex w-fit items-center justify-center gap-5 rounded-lg bg-white bg-opacity-20 px-5 py-2">
							<a
								href="https://www.linkedin.com/in/camilo-sinning-49613a241/"
								target="_blank"
							>
								<BsLinkedin
									size={30}
									className="cursor-pointer opacity-80 transition delay-75 duration-200 ease-in-out hover:opacity-100"
								/>
							</a>
							<a
								href="mailto:camilosinning.cs@gmail.com"
								target="_blank"
							>
								<MdEmail
									size={40}
									className="cursor-pointer opacity-80 transition delay-75 duration-200 ease-in-out hover:opacity-100"
								/>
							</a>
						</div>
						<div className="h-0.5 w-full bg-white bg-opacity-50" />
						<button
							className="py-4 font-normal"
							onClick={changeLanguage}
						>
							{language.name}
						</button>
					</div>
				</nav>
			</motion.nav>
			{showBackground && (
				<div className="mx-auto hidden h-[0.5px] w-3/4 bg-gradient-to-r from-veryDarkGray via-white to-veryDarkGray opacity-20 xl:block" />
			)}
		</nav>
	);
}

export default Navbar;
