import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useSectionContext from './useSectionContext';

const useObserverSections = () => {
	const [aboutmeRef, aboutmeInView] = useInView({
		threshold: 0.5
	});
	const [skillsRef, skillsInView] = useInView({
		threshold: 0.5
	});
	const [projectsRef, projectsInView] = useInView({
		threshold: 0.5
	});
	const [contactmeRef, contactmeInView] = useInView({
		threshold: 0.5
	});

	const { setSection } = useSectionContext();

	useEffect(() => {
		if (
			!skillsInView &&
			!projectsInView &&
			!contactmeInView &&
			!aboutmeInView
		) {
			setSection(null);
		}
	}, [skillsInView, projectsInView, contactmeInView, aboutmeInView]);

	useEffect(() => {
		if (aboutmeInView) {
			setSection({
				name: 'aboutme',
				color: 'verySoftRed'
			});
		}
	}, [aboutmeInView, setSection]);

	useEffect(() => {
		console.log(skillsInView);
		if (skillsInView) {
			setSection({
				name: 'skills',
				color: 'verySoftLimeGreen'
			});
		}
	}, [skillsInView, setSection]);

	useEffect(() => {
		if (projectsInView) {
			setSection({
				name: 'projects',
				color: 'verySoftCyan'
			});
		}
	}, [projectsInView, setSection]);

	useEffect(() => {
		if (contactmeInView) {
			setSection({
				name: 'contactme',
				color: 'verySoftBlue'
			});
		}
	}, [contactmeInView, setSection]);

	return {
		aboutmeRef,
		skillsRef,
		projectsRef,
		contactmeRef
	};
};

export default useObserverSections;
