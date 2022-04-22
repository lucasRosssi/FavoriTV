import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { useShow } from '../../hooks/useShow';
import { useRoute } from '@react-navigation/native';

import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { SearchBar } from '../SearchBar';
import { BackButton } from '../BackButton';

import { AppStackParamList } from '../../routes/app.routes';
import { TVShowDTO } from '../../dtos/TVShowDTO';

import {
	Container,
	MenuButton,
	Title,
	RightWrapper,
	FavoriteButton,
} from './styles';

interface HeaderProps {
	handleSearch?: (query: string) => Promise<void>;
	goToFavorites?: () => void;
	selectedShow?: TVShowDTO;
}

export function Header({
	handleSearch,
	goToFavorites,
	selectedShow = {
		id: '',
		name: '',
		genres: [''],
		status: '',
		summary: '',
		premiered: '',
		ended: '',
		language: '',
		runtime: 0,
		rating: {
			average: 0,
		},
	},
}: HeaderProps) {
	const theme = useTheme();
	const { showTitle, addFavorites, removeFavorites, favoriteShows } = useShow();
	const route = useRoute();
	const routeName = route.name as keyof AppStackParamList;

	const favoritesIds = favoriteShows.map((item) => item.id);
	const [isFavorite, setIsFavorite] = useState(
		favoritesIds.includes(selectedShow.id)
	);

	function handleFavorite() {
		if (!isFavorite) {
			addFavorites(selectedShow);
			setIsFavorite(true);
		} else {
			removeFavorites(selectedShow.id);
			setIsFavorite(false);
		}
	}

	return (
		<Container>
			{routeName === 'Dashboard' && (
				<>
					<MenuButton onPress={goToFavorites}>
						<MaterialCommunityIcons
							name="movie-open"
							size={RFValue(30)}
							color={theme.colors.shape}
						/>
						<Entypo
							name="heart"
							color={theme.colors.secondary}
							size={20}
							style={{ position: 'absolute', bottom: -5, right: -5 }}
						/>
					</MenuButton>

					<SearchBar handleSearch={handleSearch} />
				</>
			)}
			{routeName === 'ShowDetails' && (
				<>
					<BackButton />

					<RightWrapper>
						<Title numberOfLines={1}>{showTitle}</Title>
						<FavoriteButton onPress={handleFavorite}>
							<Ionicons
								name={isFavorite ? 'heart-sharp' : 'heart-outline'}
								color={theme.colors.secondary}
								size={30}
							/>
						</FavoriteButton>
					</RightWrapper>
				</>
			)}
			{routeName === 'Favorites' && (
				<>
					<BackButton />

					<RightWrapper>
						<Title numberOfLines={1}>Favorites</Title>
					</RightWrapper>
				</>
			)}
		</Container>
	);
}
