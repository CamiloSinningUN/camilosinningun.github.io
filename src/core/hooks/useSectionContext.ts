import { useContext } from 'react';
import { SectionContext } from '@contexts/SectionContext';

const useSectionContext = () => {
	const context = useContext(SectionContext);
	if (context === undefined) {
		throw new Error(
			'useSectionContext must be used within a SectionContextProvider'
		);
	}
	return context;
};

export default useSectionContext;
