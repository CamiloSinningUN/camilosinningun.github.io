import EYELAND from '@images/EYELAND.png';
import { GoProjectSymlink } from 'react-icons/go';
import { HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2';
import { LuGithub } from 'react-icons/lu';
import Span from '@components/Span';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Highlights() {
	const { t } = useTranslation('', { keyPrefix: 'highlights' });

	const itemVariants = {
		hidden: { y: -20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		}
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

	return (
		<div className="text-white">
			<motion.div
				className=""
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<div className='flex flex-col items-center'>
					<motion.div variants={itemVariants}>
						<div className="relative mb-12">
							<h3 className="relative text-center text-3xl font-bold tracking-tight text-verySoftRed lg:text-5xl">
								{t('title')}
							</h3>
							<div className="absolute -bottom-2 h-5 w-full bg-verySoftRed bg-opacity-20" />
						</div>
					</motion.div>
				</div>
				<motion.div
					className="relative flex flex-col items-center"
					variants={itemVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="left-0 mb-5 max-h-[362px] w-full max-w-[680px] overflow-hidden rounded-lg lg:absolute">
						<a
							href="https://proyecto-final-epics.github.io/EyelandWebPage/#/"
							target="_blank"
						>
							<div className="absolute hidden h-full w-full bg-brightCyanLimeGreen bg-opacity-30 transition delay-75 duration-300 ease-in-out hover:bg-opacity-0 lg:block" />
							<img
								className="max-h-[362px] w-full max-w-[680px] object-fill"
								src={EYELAND}
								alt={t('eyeland.alt.photo')}
								loading="lazy"
							/>
						</a>
					</div>
					<div className="-order-1 flex flex-col items-end self-end">
						<div className="relative left-0">
							<h5 className="relative text-xl font-normal text-softCyan">
								{t('eyeland.title')}
							</h5>
							<div className="absolute -bottom-2 h-5 w-full bg-softCyan bg-opacity-20" />
						</div>
						<h4 className="my-4 bg-gradient-to-br from-darkCyanLimeGreen to-brightCyanLimeGreen bg-clip-text text-6xl font-black tracking-tight text-transparent">
							EYELAND
						</h4>
					</div>
					<div className="flex w-full flex-col items-end">
						<div className="w-full max-w-[558px] rounded-lg rounded-ee-none border border-gray bg-darkGray p-5 text-right drop-shadow-brightCyanLimeGreen">
							<p className="text-base font-medium leading-snug">
								<Span>
									{t('eyeland.description.line_1')}
								</Span>{' '}
								{t('eyeland.description.line_2')}
							</p>
							<div className="mt-5 text-sm font-extrabold tracking-wide opacity-40">
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
			</motion.div>
		</div>
	);
}

export default Highlights;
