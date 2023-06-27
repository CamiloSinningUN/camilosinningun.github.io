interface Props {
	image: string;
	link: string;
	overshadow: boolean;
	setSelected: (value: number) => void;
	index: number;
}

function Institution({ image, link, overshadow, setSelected, index }: Props) {
	return (
		<div
			onMouseEnter={() => setSelected(index)}
			onMouseLeave={() => setSelected(-1)}
		>
			<a
				href={link}
				target="_blank"
				className={`group flex cursor-pointer items-center justify-center rounded-lg border border-gray bg-darkerGray p-5 transition delay-75 duration-200 ease-in-out ${
					overshadow && 'opacity-50'
				}`}
			>
				<img
					className="h-20 w-20 object-contain grayscale transition delay-75 duration-300 ease-in-out group-hover:grayscale-0"
					src={image}
					alt=""
				/>
			</a>
		</div>
	);
}

export default Institution;
