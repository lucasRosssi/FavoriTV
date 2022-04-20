import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { TVShowCard } from '../../components/TVShowCard';
import { TVShowDTO } from '../../dtos/TVShowDTO';

import { Container, Title, TVShowsList } from './styles';

export function Dashboard() {
	const theme = useTheme();

	const [isLoading, setIsLoading] = useState(true);

	const tvshows: TVShowDTO[] = [
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

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<>
			<Header />
			<Container>
				<Title>TV Shows</Title>

				{isLoading ? (
					<ActivityIndicator
						color={theme.colors.shape}
						size={40}
						style={{ marginTop: 50 }}
					/>
				) : (
					<TVShowsList
						data={tvshows}
						keyExtractor={(item) => item.title}
						renderItem={({ item }) => <TVShowCard />}
					/>
				)}
			</Container>
		</>
	);
}
