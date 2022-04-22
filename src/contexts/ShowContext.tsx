import React, { createContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TVShowDTO } from '../dtos/TVShowDTO';

interface ShowContextData {
	showTitle: string;
	favoriteShows: TVShowDTO[];
	changeShowTitle: (title: string) => void;
	addFavorites: (tvShow: TVShowDTO) => void;
	removeFavorites: (id: string) => void;
}

interface ShowContextProps {
	children: ReactNode;
}

const ShowContext = createContext({} as ShowContextData);

function ShowProvider({ children }: ShowContextProps) {
	const [showTitle, setShowTitle] = useState('');
	const [favoriteShows, setFavoriteShows] = useState<TVShowDTO[]>([]);

	const favoritesStorageKey = '@tvshows:';

	function changeShowTitle(title: string) {
		setShowTitle(title);
	}

	async function addFavorites(tvShow: TVShowDTO) {
		try {
			setFavoriteShows([...favoriteShows, tvShow]);
			await AsyncStorage.setItem(
				favoritesStorageKey,
				JSON.stringify([...favoriteShows, tvShow])
			);
		} catch (error) {
			throw new Error('Failed to store data');
		}
	}

	function removeFavorites(id: string) {
		const newList = favoriteShows.filter((item) => item.id !== id);

		setFavoriteShows(newList);
	}

	useEffect(() => {
		async function loadFavorites() {
			const storedFavorites = await AsyncStorage.getItem(favoritesStorageKey);

			if (storedFavorites) {
				setFavoriteShows(JSON.parse(storedFavorites) as TVShowDTO[]);
			}
		}

		loadFavorites();
	}, []);

	return (
		<ShowContext.Provider
			value={{
				showTitle,
				favoriteShows,
				changeShowTitle,
				addFavorites,
				removeFavorites,
			}}
		>
			{children}
		</ShowContext.Provider>
	);
}

export { ShowContextData, ShowContext, ShowProvider };
