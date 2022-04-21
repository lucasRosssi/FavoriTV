import { useContext } from 'react';

import { ShowContext, ShowContextData } from '../contexts/ShowContext';

export function useShow(): ShowContextData {
	const context = useContext(ShowContext);

	return context;
}
