import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

interface Props {
	children?: React.ReactNode;
	variants?: Variants;
}

function Item({ children, variants }: Props) {
	return (
		<motion.li variants={variants}>
			<p className="opacity-80 transition delay-75 duration-200 ease-in-out hover:scale-105 hover:opacity-100">
				{children}
			</p>
		</motion.li>
	);
}

export default Item;
