import { Dispatch, SetStateAction } from 'react';

interface Props {
	name: 'Web' | 'Mobile' | 'Others';
	skills: string[];
	selected: boolean;
	setSelected: Dispatch<SetStateAction<'Web' | 'Mobile' | 'Others'>>;
}

function SkillSection({ name, skills, selected, setSelected }: Props) {
	const handleOnClick = () => {
		setSelected(name);
	};

	return (
		<div
			onClick={handleOnClick}
			className="cursor-pointer opacity-80 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-100"
		>
			<div className="mb-5 flex items-center gap-4">
				<div className="relative">
					{selected && (
						<div className="absolute bottom-0 h-3 w-full bg-black bg-opacity-20" />
					)}
					<h3 className="relative text-2xl font-bold">
						{name.toUpperCase()}
					</h3>
				</div>
				<div className="h-0.5 w-full gap-4 bg-white" />
			</div>
			<div className="flex flex-wrap justify-start gap-3">
				{skills.map((skill, index) => (
					<div
						key={index}
						className="cursor-pointer rounded-md border border-white p-3 text-xl font-medium"
					>
						{skill}
					</div>
				))}
			</div>
		</div>
	);
}

export default SkillSection;
