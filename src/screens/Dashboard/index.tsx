import React from 'react';

import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';
import { MovieDTO } from '../../dtos/MovieDTO';

import { Container, Title, MovieList } from './styles';

export function Dashboard() {
	const movies: MovieDTO[] = [
		{
			title: 'Filme 1',
			image: ' ',
		},
		{
			title: 'Filme 2',
			image: ' ',
		},
		{
			title: 'Filme 3',
			image: ' ',
		},
		{
			title: 'Filme 4',
			image: ' ',
		},
	];

	return (
		<Container>
			<Header />

			<Title>Filmes</Title>

			<MovieList
				data={movies}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => <MovieCard />}
			/>
		</Container>
	);
}
