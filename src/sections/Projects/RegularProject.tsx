import { Variants, motion } from 'framer-motion';

import { AiOutlineFolder } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import hexToRgba from '@utils/hexToRgba';

interface Props {
	name: string;
	description: string;
	technologies: string[];
	link: string;
	primaryColor: string;
	secondaryColor: string;
	overshadow: boolean;
	setSelected: (index: number) => void;
	index: number;
	variants: Variants;
}

function RegularProject({
	name,
	description,
	technologies,
	link,
	primaryColor,
	secondaryColor,
	overshadow,
	setSelected,
	index,
	variants
}: Props) {
	return (
		<motion.div variants={variants}>
			<div
				className={`group flex h-72 w-80 cursor-pointer flex-col justify-between rounded-lg border border-gray bg-darkerGray p-5 transition delay-75 duration-300 ease-in-out hover:-translate-y-2 ${
					overshadow && 'opacity-50'
				}`}
				onMouseEnter={() => setSelected(index)}
				onMouseLeave={() => setSelected(-1)}
			>
				<div>
					<div className="-ml-1 flex items-start justify-between">
						<AiOutlineFolder color={`${primaryColor}`} size={60} />
						<a
							href={link}
							className="transition delay-75 duration-150 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1"
						>
							<FiArrowUpRight
								color={`${primaryColor}`}
								size={30}
							/>
						</a>
					</div>
					<h2
						className="my-2 text-2xl font-bold tracking-tight"
						style={{ color: primaryColor }}
					>
						{name.toUpperCase()}
					</h2>
					<p className="text-sm opacity-50">{description}</p>
				</div>
				<div className="flex flex-wrap justify-end gap-2 ">
					{technologies.map((technology, index) => (
						<div
							key={index}
							className="flex min-w-[92px] items-center justify-center rounded bg-opacity-5 px-3 py-1 font-bold text-white"
							style={{
								backgroundColor: hexToRgba(secondaryColor, 0.44)
							}}
						>
							{technology}
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default RegularProject;
