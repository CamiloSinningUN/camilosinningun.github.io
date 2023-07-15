import { useTranslation } from 'react-i18next';

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="mx-auto my-9 mt-20 text-center opacity-70">
			<p className="text-xl text-white">
				{t('footer')}{' '}
				<a
					className="font-bold text-softCyan"
					href="https://github.com/CamiloSinningUN"
					target="_blank"
				>
					Camilo Sinning
				</a>
			</p>
		</footer>
	);
}

export default Footer;
