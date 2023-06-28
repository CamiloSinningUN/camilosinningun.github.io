import RegularProject from './RegularProject';
import EYELAND from '@images/EYELAND.png';
import { LuGithub } from 'react-icons/lu';
import { HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2';
import { GoProjectSymlink } from 'react-icons/go';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Span from '@components/Span';

function Projects() {
	const [overshadowArray, setOvershadowArray] = useState(
		projects.map(() => false)
	);

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

	return (
		<div className="text-white">
			<motion.div
				className="relative flex items-center"
				variants={itemVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="absolute h-[362px] w-[680px] overflow-hidden rounded-lg">
					<div className="absolute h-full w-full bg-brightCyanLimeGreen bg-opacity-30 transition delay-75 duration-300 ease-in-out hover:bg-opacity-0" />
					<img
						className="h-[362px] w-[680px]  object-fill"
						src={EYELAND}
						alt=""
					/>
				</div>
				<div className="flex w-full flex-col items-end">
					<div className="relative">
						<h5 className="relative text-xl font-normal text-softCyan">
							Biggest Project
						</h5>
						<div className="absolute -bottom-2 h-5 w-full bg-softCyan bg-opacity-20" />
					</div>
					<h4 className="my-4 bg-gradient-to-br from-darkCyanLimeGreen to-brightCyanLimeGreen bg-clip-text text-6xl font-black tracking-tight text-transparent">
						EYELAND
					</h4>
					<div className="w-[558px] rounded-lg rounded-ee-none border border-gray bg-darkGray p-5 text-right drop-shadow-brightCyanLimeGreen">
						<p className="text-base font-medium leading-snug">
							<Span>Educational program</Span> for high school
							students for the construction of mobile applications
							to promote the inclusion of people with visual
							disabilities.
						</p>
						<div className="mt-5 text-sm font-black opacity-30">
							Typescript - React native - Expo - React - Vite
						</div>
					</div>
					<div className="mt-3 flex items-stretch gap-2 rounded-lg rounded-se-none bg-darkGray p-2">
						<a
							href="https://proyecto-final-epics.github.io/EyelandWebPage/"
							target="_blank"
						>
							<GoProjectSymlink className="text-2xl text-white opacity-80 hover:opacity-100" />
						</a>
						<div className="w-0.5 bg-white bg-opacity-20" />
						<a
							href="/files/Sinning_Vergara_Lizcano.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<HiOutlineDocumentMagnifyingGlass className="text-2xl text-white opacity-80 hover:opacity-100" />
						</a>
						<div className="w-0.5 bg-white bg-opacity-20" />
						<a
							href="https://github.com/Proyecto-Final-EPICS/EyelandApp"
							target="_blank"
						>
							<LuGithub className="text-2xl text-white opacity-80 hover:opacity-100" />
						</a>
					</div>
				</div>
			</motion.div>
			<motion.div
				className="mt-40 flex flex-col items-center"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
			>
				<motion.div variants={itemVariants}>
					<div className="relative mb-12">
						<h3 className="relative text-center text-4xl font-bold tracking-tight text-softViolet">
							Other projects
						</h3>
						<div className="absolute -bottom-2 h-5 w-full bg-softViolet bg-opacity-20" />
					</div>
				</motion.div>
				<div className="flex flex-wrap gap-6">
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
						<a
							href="https://github.com/CamiloSinningUN?tab=repositories"
							target="_blank"
							className=" cursor-pointer font-bold"
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
							See more...
						</a>
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
		name: 'Edupay',
		description:
			'Online payment platform for higher education institution.',
		technologies: ['Express', 'React'],
		link: 'https://github.com/Diseno-de-Software-2',
		primaryColor: '#e71d36',
		secondaryColor: '#470ff4'
	},
	{
		name: 'Soundfy',
		description:
			'A web page that allows you to create a playlist for your local music and reproduce it.',
		technologies: ['HTML', 'CSS'],
		link: 'https://github.com/CamiloSinningUN/Sounfy',
		primaryColor: '#f45561',
		secondaryColor: '#0aa3da'
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
