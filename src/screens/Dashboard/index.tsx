import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { TVShowCard } from '../../components/TVShowCard';
import { TVShowDTO } from '../../dtos/TVShowDTO';
import { api } from '../../services/api';

import { Container, Title, TVShowsList } from './styles';

export function Dashboard() {
	const theme = useTheme();

	const [isLoading, setIsLoading] = useState(true);
	const [tvShows, setTvShows] = useState<TVShowDTO[]>([]);
	const [noMorePages, setNoMorePages] = useState(false);

	let page = 1;

	async function fetchNextPage() {
		console.log('NEXT PAGEEE!!');

		try {
			const response = await api.get(`/shows?page=${page}`);

			if (response.data) {
				setTvShows([...tvShows, ...response.data]);
				page += 1;
			} else {
				setNoMorePages(true);
			}
		} catch (error) {
			throw new Error('Failed to load TV Shows');
		}
	}

	useEffect(() => {
		async function fetchTvShows() {
			try {
				const response = await api.get(`/shows?page=0`);

				setTvShows(response.data);
				setIsLoading(false);
			} catch (error) {
				throw new Error('Failed to load TV Shows');
			}
		}

		fetchTvShows();
	}, []);

	return (
		<>
			<Header />
			<Container>
				{isLoading ? (
					<>
						<Title>TV Shows</Title>
						<ActivityIndicator
							color={theme.colors.shape}
							size={40}
							style={{ marginTop: 50 }}
						/>
					</>
				) : (
					<TVShowsList
						ListHeaderComponent={<Title>TV Shows</Title>}
						data={tvShows}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TVShowCard
								name={item.name}
								image={item.image?.medium}
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
						onEndReachedThreshold={0.1}
						onEndReached={fetchNextPage}
						ListFooterComponent={() => {
							if (!noMorePages) {
								return (
									<ActivityIndicator
										color={theme.colors.shape}
										size={40}
										style={{ marginVertical: 20 }}
									/>
								);
							} else {
								return <></>;
							}
						}}
					/>
				)}
			</Container>
		</>
	);
}
