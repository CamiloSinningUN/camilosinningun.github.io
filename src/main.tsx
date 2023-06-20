import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import SectionContextProvider from '@contexts/SectionContext.tsx';
import './i18n.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SectionContextProvider>
			<App />
		</SectionContextProvider>
	</React.StrictMode>
);
