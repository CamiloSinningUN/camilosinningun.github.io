import { useState } from 'react';
import CodeEditor from './CodeEditor';
import SkillSection from './SkillSection';

function Skills() {
	const [skillSelected, setSkillSelected] = useState<
		'Web' | 'Mobile' | 'Others'
	>('Mobile');

	return (
		<div className="flex justify-between gap-20 text-white">
			<div className="relative flex h-[708px] w-[446px]  rounded-lg border border-white bg-brightViolet p-7">
				<h2 className="absolute bottom-0 left-[505px] origin-bottom-left -rotate-90 select-none text-[160px] font-black tracking-tighter text-darkViolet opacity-50">
					{skillSelected.toUpperCase()}
				</h2>
				<div className="z-20 flex flex-col gap-20">
					<SkillSection
						name="Web"
						skills={['React', 'Vite', 'Typescript']}
						selected={skillSelected === 'Web'}
						setSelected={setSkillSelected}
					/>
					<SkillSection
						name="Mobile"
						skills={['Expo', 'React native', 'Typescript']}
						selected={skillSelected === 'Mobile'}
						setSelected={setSkillSelected}
					/>
					<SkillSection
						name="Others"
						skills={['Java', 'Python']}
						selected={skillSelected === 'Others'}
						setSelected={setSkillSelected}
					/>
				</div>
			</div>
			<div className="border-gray-700 flex h-[708px] w-[446px] rounded-lg border bg-black">
				<div className="border-gray-700 h-full w-10 border-r" />
				<CodeEditor skill={skillSelected} />
			</div>
		</div>
	);
}

export default Skills;
