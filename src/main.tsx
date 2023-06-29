import './i18n.ts';
import './index.css';

import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SectionContextProvider from '@contexts/SectionContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SectionContextProvider>
			<App />
		</SectionContextProvider>
	</React.StrictMode>
);
