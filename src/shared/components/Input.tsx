import { Control, Controller } from 'react-hook-form';

import { Message } from '@interfaces/Message.interface';

interface Props {
	control: Control<Message>;
	name: keyof Message;
	label: string;
	placeholder?: string;
	error?: string;
}

const Input = ({ control, name, label, placeholder, error }: Props) => {
	return (
		<div className="flex w-full flex-col">
			<label htmlFor={name} className="mb-2 text-xl font-bold text-white">
				{label}
			</label>
			<Controller
				control={control}
				name={name}
				rules={{
					required: true,
					pattern:
						name === 'email'
							? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
							: /.*/
				}}
				render={({ field }) => {
					return name === 'message' ? (
						<textarea
							{...field}
							placeholder={placeholder}
							rows={9}
							className="w-full resize-none rounded-md border border-veryDarkGray bg-darkGray px-3 py-3 text-white focus:outline-none"
						/>
					) : (
						<input
							{...field}
							placeholder={placeholder}
							className="w-full rounded-md border border-veryDarkGray bg-darkGray px-3 py-3 text-white focus:outline-none"
						/>
					);
				}}
			/>
			{error ? (
				<p className="h-7 font-medium text-red-500">{error}</p>
			) : (
				<div className="h-7" />
			)}
		</div>
	);
};

export default Input;
