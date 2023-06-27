import AnimatedCursor from 'react-animated-cursor';
import Navbar from '@components/Navbar';
import LanguageSwitch from '@components/LanguageSwitch';
import Title from '@components/Title';
import Hero from '@sections/Hero';
import Aboutme from '@sections/Aboutme';
import Skills from '@sections/Skills';
import Projects from '@sections/Projects';
import Contactme from '@sections/Contactme';
import Footer from '@components/Footer';

import useObserverSections from '@hooks/useObserveSections';

function App() {
	const { aboutmeRef, skillsRef, projectsRef, contactmeRef } =
		useObserverSections();

	return (
		<div className="relative">
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
			<div className="fixed -z-10 w-full bg-lightBlue">
				<div className="mx-auto max-w-screen-lg">
					<Hero />
				</div>
			</div>
			<div className="absolute top-[100vh] w-full bg-veryDarkGray">
				<div className="mx-auto mt-40 flex max-w-screen-lg flex-col gap-60">
					<div ref={aboutmeRef} id="aboutme">
						<Aboutme />
					</div>
					{/* <div ref={skillsRef}><Skills /></div> */}
					<div ref={projectsRef} id="projects">
						<Projects />
					</div>
					<div>
						<div ref={contactmeRef} id="contactme">
							<Contactme />
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
