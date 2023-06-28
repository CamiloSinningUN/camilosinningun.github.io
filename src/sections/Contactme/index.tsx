import Social from '@shapes/Social.svg';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

function Contactme() {
	const containerVariants = {
		hidden: {
			y: -20,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: 0.1,
				duration: 0.5
			}
		}
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
		>
			<div className="relative mx-auto w-fit">
				<div
					className="absolute -right-20 top-10 flex h-[145px] w-[83.5px] flex-col items-center justify-start gap-2 pl-5 pt-4"
					style={{ backgroundImage: `url(${Social})` }}
				>
					<a
						href="https://www.linkedin.com/in/camilo-sinning-49613a241/"
						target="_blank"
					>
						<BsLinkedin
							size={35}
							className="cursor-pointer opacity-80 transition delay-75 duration-200 ease-in-out hover:opacity-100"
						/>
					</a>
					<div className="mt-1 h-0.5 w-1/2 bg-black opacity-20" />
					<a href="mailto:camilosinning.cs@gmail.com" target="_blank">
						<MdEmail
							size={40}
							className="cursor-pointer opacity-80 transition delay-75 duration-200 ease-in-out hover:opacity-100"
						/>
					</a>
				</div>
				<div className="relative mx-auto h-[734px] w-[698px] rounded-lg border border-gray bg-black drop-shadow-strongBlue">
					<h2 className="absolute -left-7 -top-14 text-8xl font-black text-white">
						FORM
					</h2>
					<form
						action="post"
						className="flex h-full flex-col items-start justify-center px-8 py-14"
					>
						<label
							className="mb-3 mt-6 text-xl font-bold text-white"
							htmlFor="name"
						>
							Name
						</label>
						<input
							className="w-full rounded-md border border-veryDarkGray bg-darkGray px-3 py-3"
							type="text"
							name="name"
							id="name"
						/>
						<label
							className="mb-3 mt-6 text-xl font-bold text-white"
							htmlFor="subject"
						>
							Subject
						</label>
						<input
							className="w-full rounded-md border border-veryDarkGray bg-darkGray px-3 py-3"
							type="text"
							name="subject"
							id="subject"
						/>
						<label
							className="mb-3 mt-6 text-xl font-bold text-white"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							cols={30}
							rows={10}
							className="w-full resize-none rounded-md border border-veryDarkGray bg-darkGray px-3 py-3"
						></textarea>
						<button
							className="mt-11 w-full rounded-md bg-lightBlue py-4 text-xl font-bold text-white "
							type="submit"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</motion.div>
	);
}

export default Contactme;
