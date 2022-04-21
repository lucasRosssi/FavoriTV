import React, { createContext, ReactNode, useState } from 'react';

interface ShowContextData {
	showTitle: string;
	changeShowTitle: (title: string) => void;
}

interface ShowContextProps {
	children: ReactNode;
}

const ShowContext = createContext({} as ShowContextData);

function ShowProvider({ children }: ShowContextProps) {
	const [showTitle, setShowTitle] = useState('');

	function changeShowTitle(title: string) {
		setShowTitle(title);
	}

	return (
		<ShowContext.Provider
			value={{
				showTitle,
				changeShowTitle,
			}}
		>
			{children}
		</ShowContext.Provider>
	);
}

export { ShowContextData, ShowContext, ShowProvider };
