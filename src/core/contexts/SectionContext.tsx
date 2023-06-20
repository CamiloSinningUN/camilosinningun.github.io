import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState
} from 'react';

interface SectionContextProps {
	section: {
		name: 'skills' | 'projects' | 'contactme';
		color: 'verySoftLimeGreen' | 'verySoftCyan' | 'verySoftBlue';
	} | null;
	setSection: Dispatch<
		SetStateAction<{
			name: 'skills' | 'projects' | 'contactme';
			color: 'verySoftLimeGreen' | 'verySoftCyan' | 'verySoftBlue';
		} | null>
	>;
}

export const SectionContext = createContext<SectionContextProps>({
	section: null,
	setSection: () => {}
});

const SectionContextProvider = ({ children }: { children: ReactNode }) => {
	const [section, setSection] =
		useState<SectionContextProps['section']>(null);

	return (
		<SectionContext.Provider value={{ section, setSection }}>
			{children}
		</SectionContext.Provider>
	);
};

export default SectionContextProvider;
