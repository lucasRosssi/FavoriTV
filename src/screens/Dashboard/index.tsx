import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
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
	const [isSearching, setIsSearching] = useState(false);

	let page = 1;

	async function fetchTvShows() {
		try {
			const response = await api.get(`/shows?page=0`);

			setTvShows(response.data);
			setIsLoading(false);
		} catch (error) {
			throw new Error('Failed to load TV Shows');
		}
	}

	async function fetchNextPage() {
		if (isSearching || noMorePages) {
			return;
		}

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

	async function handleSearchByName(query: string) {
		setIsLoading(true);
		setIsSearching(true);

		if (!query.trim()) {
			fetchTvShows();
			setIsSearching(false);
			return;
		}

		const formattedQuery = query.trim().replace(' ', '+');

		try {
			const response = await api.get(`/search/shows?q=${formattedQuery}`);

			if (!response.data) {
				Alert.alert('', 'No TV shows found');

				return;
			}

			const shows = response.data.map((item: any) => item.show);

			setTvShows(shows);
			setIsLoading(false);
		} catch (error) {
			throw new Error('Failed to search for tv shows');
		}
	}

	useEffect(() => {
		fetchTvShows();
	}, []);

	return (
		<>
			<Header handleSearch={handleSearchByName} />
			<Container>
				{isLoading ? (
					<>
						<Title style={{ padding: 20 }}>TV Shows</Title>
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
						onEndReachedThreshold={0.1}
						onEndReached={fetchNextPage}
						ListFooterComponent={
							<ActivityIndicator
								color={theme.colors.shape}
								size={!(isSearching || noMorePages) ? 40 : 0}
								style={{ marginVertical: 20 }}
							/>
						}
					/>
				)}
			</Container>
		</>
	);
}
