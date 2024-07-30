import RegularProject from './RegularProject';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
	const [overshadowArray, setOvershadowArray] = useState(
		projects.map(() => false)
	);

	const { t } = useTranslation('', { keyPrefix: 'projects' });

	const setSelected = (index: number) => {
		if (index === -1) {
			setOvershadowArray(overshadowArray.map(() => false));
			return;
		}
		const overshadowArrayCopy = overshadowArray.map(() => true);
		overshadowArrayCopy[index] = false;
		setOvershadowArray(overshadowArrayCopy);
	};

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1
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

	return (
		<div className="text-white">
			<motion.div
				className="flex flex-col items-center"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.div variants={itemVariants}>
					<div className="relative mb-12">
						<h3 className="relative text-center text-3xl font-bold tracking-tight text-softViolet lg:text-5xl">
							{t('title')}
						</h3>
						<div className="absolute -bottom-2 h-5 w-full bg-softViolet bg-opacity-20" />
					</div>
				</motion.div>
				<div className="flex flex-col flex-wrap justify-center gap-6 lg:flex-row">
					{projects.map((project, index) => (
						<RegularProject
							key={project.name}
							name={project.name}
							description={project.description}
							technologies={project.technologies}
							link={project.link}
							primaryColor={project.primaryColor}
							secondaryColor={project.secondaryColor}
							overshadow={overshadowArray[index]}
							setSelected={setSelected}
							index={index}
							variants={itemVariants}
						/>
					))}
				</div>
				<motion.div variants={itemVariants}>
					<div className="group relative mt-10 overflow-hidden transition delay-75 duration-200 ease-in-out hover:scale-105">
						<div
							className="flex cursor-pointer items-center font-bold"
							onMouseEnter={() =>
								setOvershadowArray(
									overshadowArray.map(() => true)
								)
							}
							onMouseLeave={() =>
								setOvershadowArray(
									overshadowArray.map(() => false)
								)
							}
						>
							<a
								href="https://github.com/CamiloSinningUN?tab=repositories"
								target="_blank"
							>
								{t('seemore')}
							</a>
						</div>
						<div className="relative -left-full border-t-2 border-white transition-transform delay-75 duration-200 ease-in-out group-hover:translate-x-full" />
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

const projects: {
	name: string;
	description: string;
	technologies: string[];
	link: string;
	primaryColor: string;
	secondaryColor: string;
}[] = [
		{
			name: 'SIMET',
			description:
				'A web page that strengthens mutual aid in industrial emergencies through a network of companies.',
			technologies: ['Angular', 'Goople Maps API'],
			link: 'https://simet.co/',
			primaryColor: '#73d36e',
			secondaryColor: '#5d52fc'
		},
		{
			name: 'Edupay',
			description:
				'Online payment platform for higher education institution.',
			technologies: ['Express', 'React'],
			link: 'https://github.com/Diseno-de-Software-2',
			primaryColor: '#e71d36',
			secondaryColor: '#470ff4'
		},
		{
			name: 'Madland',
			description: '2.5D multiplayer game with a cowboy theme. ',
			technologies: ['C#', 'Unity'],
			link: 'https://github.com/CamiloSinningUN/MadLand',
			primaryColor: '#A1D781',
			secondaryColor: '#EFCA84'
		},
		{
			name: 'Gran evento',
			description:
				'This project is a web page that allows users to find and attend events in their city.',
			technologies: ['JavaScript', 'React'],
			link: 'https://github.com/CamiloSinningUN/Gran-Evento',
			primaryColor: '#4962DA',
			secondaryColor: '#000000'
		},
		{
			name: 'University-bd',
			description:
				'Web page which manages a database in SQL that contains the information of a university.',
			technologies: ['MySQL', 'Handlebars'],
			link: 'https://github.com/CamiloSinningUN/University-bbdd',
			primaryColor: '#fe84e7',
			secondaryColor: '#424361'
		},
		{
			name: 'Taken game',
			description: 'Web page with a taken game.',
			technologies: ['HTML', 'CSS'],
			link: 'https://github.com/CamiloSinningUN/TakenGame',
			primaryColor: '#a668fc',
			secondaryColor: '#52d053'
		}
	];

export default Projects;
