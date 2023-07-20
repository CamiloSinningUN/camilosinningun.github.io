import Logo from '@images/Logo.png';
import { motion } from 'framer-motion';

function Loading() {
	const logoVariants = {
		initial: { opacity: 0, scale: 0.5 },
		animate: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1.5
			}
		}
	};

	const barLeftVariants = {
		initial: { x: '-100%' },
		animate: {
			x: 0,
			transition: {
				duration: 1.5,
				ease: 'easeInOut'
			}
		}
	};

	const barRightVariants = {
		initial: { x: '100%' },
		animate: {
			x: 0,
			transition: {
				duration: 1.5,
				ease: 'easeInOut'
			}
		}
	};

	return (
		<div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-lightBlue">
			<motion.div
				className="flex w-full items-center"
				variants={barLeftVariants}
				initial="initial"
				animate="animate"
			>
				<div className="h-0.5 w-full bg-white" />
				<div className="h-3 w-3 rotate-45 border-b-2 border-l-2 border-white" />
			</motion.div>
			<motion.img
				className="h-16 w-16  border-white"
				src={Logo}
				alt="Camilo Sinning"
				variants={logoVariants}
				initial="initial"
				animate="animate"
				loading="lazy"
			/>
			<motion.div
				className="flex w-full items-center"
				variants={barRightVariants}
				initial="initial"
				animate="animate"
			>
				<div className="h-3 w-3 rotate-45 border-r-2 border-t-2 border-white" />
				<div className="h-0.5 w-full bg-white" />
			</motion.div>
		</div>
	);
}

export default Loading;
