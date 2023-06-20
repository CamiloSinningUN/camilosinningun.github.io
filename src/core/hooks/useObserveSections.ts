import { useEffect } from 'react';
import useSectionContext from './useSectionContext';
import { useInView } from 'react-intersection-observer';

const useObserverSections = () => {
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
		if (!skillsInView && !projectsInView && !contactmeInView) {
			setSection(null);
		}
	}, [skillsInView, projectsInView, contactmeInView]);

	useEffect(() => {
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
		skillsRef,
		projectsRef,
		contactmeRef
	};
};

export default useObserverSections;
