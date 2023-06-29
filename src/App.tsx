import { useEffect, useState } from 'react';

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

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2100);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="relative overflow-x-clip">
			<AnimatedCursor
				color="174, 248, 189"
				showSystemCursor={true}
				outerSize={700}
				outerScale={1}
				outerStyle={{
					background:
						'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0.52%, rgba(255, 255, 255, 0.05) 51.56%, rgba(255, 255, 255, 0) 100%)'
				}}
				innerSize={0}
			/>
			<LanguageSwitch type="top" />
			<LanguageSwitch type="bottom" />
			<Navbar />
			<Title />
			<div className="fixed -z-10 h-auto min-h-screen w-screen bg-lightBlue">
				<div className="mx-auto justify-start px-4 lg:max-w-screen-lg">
					<Hero />
				</div>
			</div>
			<div className="absolute top-[100vh] w-full bg-veryDarkGray px-4">
				<div className="mx-auto mt-40 flex max-w-screen-lg flex-col">
					<div
						ref={aboutmeRef}
						id="aboutme"
						className="py-16 lg:py-24"
					>
						<Aboutme />
					</div>
					<div
						ref={projectsRef}
						id="projects"
						className="py-16 lg:py-24"
					>
						<Projects />
					</div>
					<div></div>
					<div
						ref={contactmeRef}
						id="contactme"
						className="py-16 lg:py-24"
					>
						<Contactme />
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
