import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRoute } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RenderHTML from 'react-native-render-html';
import { TVShowDTO } from '../../dtos/TVShowDTO';

import {
	Container,
	Details,
	Image,
	DetailsItem,
	Item,
	Text,
	ImageWrapper,
	GenreWrapper,
	Genre,
	Genres,
} from './styles';

export interface ShowDetailsParams {
	id?: string;
	name?: string;
	image?: {
		medium: string;
		original: string;
	};
	status?: string;
	premiered?: string;
	ended?: string;
	duration?: number;
	genres: string[];
	language?: string;
	rating?: number;
	summary?: string;
}

export function ShowDetails() {
	const theme = useTheme();
	const route = useRoute();
	const params = route.params as ShowDetailsParams;
	const { width: displayWidth } = useWindowDimensions();

	const selectedShow = {
		id: params.id,
		name: params.name,
		image: params.image,
		status: params.status,
		premiered: params.premiered,
		ended: params.ended,
		runtime: params.duration,
		genres: params.genres,
		language: params.language,
		rating: {
			average: params.rating,
		},
		summary: params.summary,
	} as TVShowDTO;

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
			<Header selectedShow={selectedShow} />
			<Container>
				<Details>
					{params.image ? (
						<Image
							source={{
								uri: params.image.original,
							}}
						/>
					) : (
						<ImageWrapper>
							<MaterialCommunityIcons name="movie-open" size={RFValue(100)} />
						</ImageWrapper>
					)}
					{params.rating && (
						<DetailsItem>
							<Item>Rating</Item>
							<Text>{params.rating}</Text>
						</DetailsItem>
					)}
					{params.status && (
						<DetailsItem>
							<Item>Status</Item>
							<Text>{params.status}</Text>
						</DetailsItem>
					)}
					{params.premiered && (
						<DetailsItem>
							<Item>On Air</Item>
							<Text>
								{params.premiered} -{' '}
								{params.ended && params.status === 'Ended'
									? params.ended
									: 'Present'}
							</Text>
						</DetailsItem>
					)}

					{params.duration && (
						<DetailsItem>
							<Item>Duration</Item>
							<Text>{params.duration} min</Text>
						</DetailsItem>
					)}
					{params.language && (
						<DetailsItem>
							<Item>Language</Item>
							<Text>{params.language}</Text>
						</DetailsItem>
					)}

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
