import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRoute } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RenderHTML from 'react-native-render-html';

import {
	Container,
	Details,
	Image,
	DetailsItem,
	Item,
	Text,
	Summary,
	ImageWrapper,
	GenreWrapper,
	Genre,
	Genres,
} from './styles';

export interface ShowDetailsParams {
	image?: string;
	status?: string;
	duration?: number;
	genres: string[];
	language?: string;
	summary?: string;
}

export function ShowDetails() {
	const theme = useTheme();
	const route = useRoute();
	const params = route.params as ShowDetailsParams;
	const { width: displayWidth } = useWindowDimensions();

	const genreTypes = params.genres.map((genre) => (
		<GenreWrapper key={genre}>
			<Genre key={genre}>{genre}</Genre>
		</GenreWrapper>
	));

	const contentWidth = displayWidth - 40;
	const convertedContent = {
		html: `${params.summary}`,
	};

	return (
		<>
			<Header />
			<Container>
				<Details>
					{params.image ? (
						<Image
							source={{
								uri: params.image,
							}}
						/>
					) : (
						<ImageWrapper>
							<MaterialCommunityIcons name="movie-open" size={RFValue(100)} />
						</ImageWrapper>
					)}
					<DetailsItem>
						<Item>Status</Item>
						<Text>{params.status}</Text>
					</DetailsItem>
					<DetailsItem>
						<Item>Duration</Item>
						<Text>{params.duration} min</Text>
					</DetailsItem>
					<DetailsItem>
						<Item>Genres</Item>
						<Text>{}</Text>
					</DetailsItem>
					<DetailsItem>
						<Item>Language</Item>
						<Text>{params.language}</Text>
					</DetailsItem>

					<Genres>{genreTypes}</Genres>
				</Details>

				<RenderHTML
					contentWidth={contentWidth}
					source={convertedContent}
					systemFonts={[theme.fonts.regular, theme.fonts.bold]}
					baseStyle={{
						fontFamily: theme.fonts.regular,
						fontSize: RFValue(17),
						color: theme.colors.shape,
						textAlign: 'justify',
					}}
					tagsStyles={{
						b: {
							fontFamily: theme.fonts.bold,
						},
					}}
				/>
			</Container>
		</>
	);
}
