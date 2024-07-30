import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import { BsLinkedin } from 'react-icons/bs';
import Input from '@components/Input';
import { MdEmail } from 'react-icons/md';
import { Message } from '@interfaces/Message.interface';
import Social from '@shapes/Social.svg';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import useSendMessage from '@hooks/useSendMessage';
import { useTranslation } from 'react-i18next';

function Contactme() {
	const { t } = useTranslation('', { keyPrefix: 'contactme' });
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	});
	const { sendMessage, loading, error } = useSendMessage();

	const onSubmit = async (data: Message) => {

		await sendMessage(data);
		if (error) {
			toast.error(t('toast.error'), { theme: 'colored' });
		} else {
			toast.success(t('toast.success'), { theme: 'colored' });
			reset();
		}
	};

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
			viewport={{ once: true, amount: 0.3 }}
		>
			<ToastContainer />
			<div className="mx-auto flex w-full flex-row justify-center">
				<form className="relative mx-auto h-[734px] w-full max-w-[698px] rounded-lg border border-gray bg-black drop-shadow-strongBlue">
					<div
						className="absolute -right-[4.6rem] top-10 hidden h-[136px] w-[74px] flex-col items-center justify-start gap-2 pl-3 pt-4 lg:flex"
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
						<a
							href="mailto:camilosinning.cs@gmail.com"
							target="_blank"
						>
							<MdEmail
								size={40}
								className="cursor-pointer opacity-80 transition delay-75 duration-200 ease-in-out hover:opacity-100"
							/>
						</a>
					</div>
					<h2 className="absolute -top-8 w-full text-center text-7xl font-black tracking-tighter text-white lg:-left-7 lg:-top-14 lg:w-auto lg:text-8xl">
						FORM
					</h2>
					<div className="flex h-full w-full flex-col items-start justify-center px-8 py-14">
						<Input
							label={t('name')}
							name="name"
							control={control}
							error={errors.name && t('errors.name')}
						/>
						<Input
							label={t('email')}
							name="email"
							control={control}
							error={errors.email && t('errors.email')}
						/>
						<Input
							label={t('message')}
							name="message"
							control={control}
							error={errors.message && t('errors.message')}
						/>
						<button
							className="mt-2 w-full rounded-md bg-indigo-500 py-4 text-xl font-bold text-white transition delay-75 duration-200 ease-in-out hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none active:bg-blue-700"
							onClick={(e) => {
								e.preventDefault();
								return !loading && handleSubmit(onSubmit)()
							}
							}
						>
							{!loading ? t('send') : t('sending')}
						</button>
					</div>
				</form>
			</div>
		</motion.div>
	);
}

export default Contactme;
