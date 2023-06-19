import Navbar from '@components/Navbar';
import LanguageSwitch from '@components/LanguageSwitch';
import Hero from '@sections/Hero';

import AnimatedCursor from 'react-animated-cursor';

function App() {
	return (
		<div className="relative bg-lightBlue">
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
			<div className="mx-auto max-w-screen-xl">
				<Hero />
			</div>
		</div>
	);
}

export default App;
