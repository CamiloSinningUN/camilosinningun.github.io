import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

interface Props {
	variants?: Variants;
	content: string;
	href: string;
}

function Item({ variants, content, href }: Props) {
	return (
		<motion.li variants={variants}>
			<p className="opacity-80 transition delay-75 duration-200 ease-in-out hover:scale-105 hover:opacity-100">
				<a href={href}>{content}</a>
			</p>
		</motion.li>
	);
}

export default Item;
