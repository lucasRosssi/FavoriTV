import React, { useEffect, useState } from 'react';
import { useShow } from '../../hooks/useShow';

import { Header } from '../../components/Header';
import { TVShowCard } from '../../components/TVShowCard';
import { TVShowDTO } from '../../dtos/TVShowDTO';

import { Container, Title, TVShowsList } from './styles';

export interface FavoritesParams {}

export function Favorites() {
	const { favoriteShows } = useShow();

	const [tvShows, setTvShows] = useState<TVShowDTO[]>(favoriteShows);

	useEffect(() => {
		setTvShows(favoriteShows);
	}, [favoriteShows]);

	return (
		<>
			<Header />

			<Container>
				{tvShows.length !== 0 ? (
					<TVShowsList
						data={tvShows}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TVShowCard
								id={item.id}
								name={item.name}
								image={item.image}
								genres={item.genres}
								summary={item.summary}
								status={item.status}
								premiered={item.premiered}
								ended={item.ended}
								duration={item.runtime}
								rating={item.rating.average}
								language={item.language}
							/>
						)}
						maxToRenderPerBatch={11}
					/>
				) : (
					<Title style={{ padding: 20 }}>No favorites added yet...</Title>
				)}
			</Container>
		</>
	);
}
