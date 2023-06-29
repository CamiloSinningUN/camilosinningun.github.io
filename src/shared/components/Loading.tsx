import Logo from '@images/Logo.png';
import { motion } from 'framer-motion';

function Loading() {
	const logoVariants = {
		initial: { opacity: 0, scale: 0.5, rotate: 0 },
		animate: {
			opacity: 1,
			scale: 1,
			rotate: 360,
			transition: { duration: 2, loop: Infinity, ease: 'linear' }
		}
	};

	return (
		<div className="flex h-screen w-screen items-center justify-center bg-lightBlue">
			<motion.img
				className="h-10 w-10 border-white"
				src={Logo}
				alt=""
				variants={logoVariants}
				initial="initial"
				animate="animate"
			/>
		</div>
	);
}

export default Loading;
