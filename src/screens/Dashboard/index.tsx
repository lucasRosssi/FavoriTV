import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { TVShowCard } from '../../components/TVShowCard';
import { TVShowDTO } from '../../dtos/TVShowDTO';
import { api } from '../../services/api';

import { Container, Title, TVShowsList } from './styles';

export function Dashboard() {
	const theme = useTheme();
	const { navigate } = useNavigation();

	const [isLoading, setIsLoading] = useState(true);
	const [tvShows, setTvShows] = useState<TVShowDTO[]>([]);
	const [list, setList] = useState<TVShowDTO[]>([]);
	const [page, setPage] = useState(0);
	const [noMorePages, setNoMorePages] = useState(false);
	const [isSearching, setIsSearching] = useState(false);
	const [start, setStart] = useState(10);
	const [end, setEnd] = useState(19);

	async function fetchTvShows() {
		try {
			const response = await api.get(`/shows?page=${page}`);

			if (response.status === 404) {
				setNoMorePages(true);
				return;
			}

			setTvShows(response.data);
			setList(response.data.slice(0, 9));
			setIsLoading(false);
		} catch (error) {
			throw new Error('Failed to load TV Shows');
		}
	}

	async function fetchNextBatch() {
		if (isSearching || noMorePages) {
			return;
		}

		const batch = tvShows.slice(start, end);

		setList([...list, ...batch]);
		setStart(start + 10);
		setEnd(end + 10);
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

			setList(shows);
			setIsLoading(false);
		} catch (error) {
			throw new Error('Failed to search for tv shows');
		}
	}

	useEffect(() => {
		setStart(10);
		setEnd(19);
		fetchTvShows();
	}, [page]);

	useEffect(() => {
		if (end === 250 * page - 1) {
			setPage(page + 1);
		}
	}, [end]);

	return (
		<>
			<Header
				goToFavorites={() => navigate('Favorites', {})}
				handleSearch={handleSearchByName}
			/>
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
						data={list}
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
						onEndReachedThreshold={0.1}
						onEndReached={fetchNextBatch}
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
