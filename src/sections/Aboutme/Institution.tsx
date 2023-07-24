import { useTranslation } from 'react-i18next';

interface Props {
	image: string;
	link: string;
	overshadow: boolean;
	setSelected: (value: number) => void;
	index: number;
	alt?: string;
}

function Institution({
	image,
	link,
	overshadow,
	setSelected,
	index,
	alt
}: Props) {
	const { t } = useTranslation('', { keyPrefix: 'aboutme.alt' });

	return (
		<a
			href={link}
			target="_blank"
			className={`group flex aspect-square h-full w-full cursor-pointer items-center justify-center rounded-lg border border-gray bg-darkerGray p-5 transition delay-75 duration-200 ease-in-out sm:p-8 ${
				overshadow ? 'opacity-50' : 'opacity-100'
			}`}
			onMouseEnter={() => setSelected(index)}
			onMouseLeave={() => setSelected(-1)}
		>
			<img
				className="h-full w-full object-contain grayscale transition delay-75 duration-300 ease-in-out group-hover:grayscale-0"
				src={image}
				alt={alt ? alt : t('institution')}
				loading="lazy"
			/>
		</a>
	);
}

export default Institution;
