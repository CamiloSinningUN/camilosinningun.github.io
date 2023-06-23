import { AiOutlineFolder } from 'react-icons/ai';
import hexToRgba from '@utils/hexToRgba';
import { FiArrowUpRight } from 'react-icons/fi';

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
	index
}: Props) {
	return (
		<div
			className={`transtio group flex h-72 w-80 cursor-pointer flex-col justify-between rounded-lg border border-gray bg-darkerGray p-5 delay-75 duration-200 ease-in-out ${
				overshadow && 'opacity-50'
			}`}
			onMouseEnter={() => setSelected(index)}
			onMouseLeave={() => setSelected(-1)}
		>
			<div>
				<div className="-ml-1 flex items-start justify-between">
					<AiOutlineFolder color={`${primaryColor}`} size={70} />
					<a
						href={link}
						className="transition delay-75 duration-150 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1"
					>
						<FiArrowUpRight color={`${primaryColor}`} size={30} />
					</a>
				</div>
				<h2
					className="my-2 text-3xl font-bold"
					style={{ color: primaryColor }}
				>
					{name.toUpperCase()}
				</h2>
				<p className="opacity-50">{description}</p>
			</div>
			<div className="flex flex-wrap justify-end gap-2 ">
				{technologies.map((technology) => (
					<div
						className="flex items-center justify-center rounded bg-opacity-5 px-3 py-1 font-bold text-white"
						style={{
							backgroundColor: hexToRgba(secondaryColor, 0.44),
							minWidth: '92px'
						}}
					>
						{technology}
					</div>
				))}
			</div>
		</div>
	);
}

export default RegularProject;
