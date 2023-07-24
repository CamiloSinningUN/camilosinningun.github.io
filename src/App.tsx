import { useEffect, useMemo, useState } from 'react';

import Aboutme from '@sections/Aboutme';
import AnimatedCursor from 'react-animated-cursor';
import Contactme from '@sections/Contactme';
import Footer from '@components/Footer';
import Hero from '@sections/Hero';
import LanguageSwitch from '@components/LanguageSwitch';
import Loading from '@components/Loading';
import Navbar from '@components/Navbar';
import Projects from '@sections/Projects';
import Title from '@components/Title';
import useObserverSections from '@hooks/useObserveSections';

function App() {
	const { aboutmeRef, projectsRef, contactmeRef } = useObserverSections();
	const [isLoading, setIsLoading] = useState(true);

	const animatedCursorProps = useMemo(() => {
		return {
			color: '174, 248, 189',
			showSystemCursor: true,
			outerSize: 700,
			outerScale: 1,
			outerStyle: {
				background:
					'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.08) 0.52%, rgba(255, 255, 255, 0.04) 51.56%, rgba(255, 255, 255, 0) 100%)'
			},
			innerSize: 0
		};
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1600);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="relative overflow-x-clip">
			<AnimatedCursor {...animatedCursorProps} />
			<header>
				<LanguageSwitch type="top" />
				<LanguageSwitch type="bottom" />
				<Navbar />
				<Title />
				<Hero />
			</header>
			<main className="absolute top-[100vh] w-screen bg-veryDarkGray px-4">
				<div className="mx-auto mt-40 flex max-w-screen-lg flex-col">
					<section
						ref={aboutmeRef}
						id="aboutme"
						className="py-16 lg:pt-24"
					>
						<Aboutme />
					</section>
					<section
						ref={projectsRef}
						id="projects"
						className="py-16 lg:py-24"
					>
						<Projects />
					</section>
					<section
						ref={contactmeRef}
						id="contactme"
						className="pt-16 lg:pt-24"
					>
						<Contactme />
					</section>
					<Footer />
				</div>
			</main>
		</div>
	);
}

export default App;
