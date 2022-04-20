import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import {
	Container,
	TitleWrapper,
	Title,
	RowWrapper,
	Image,
	Content,
	Info,
	DetailsWrapper,
	ImageWrapper,
	GenreWrapper,
	Genre,
	Genres,
	Details,
} from './styles';

interface TVShowCardProps {
	name: string;
	image?: string;
	genres: string[];
	summary: string;
	status: string;
	premiered?: string;
	ended?: string;
	duration: number;
	rating: number;
	language: string;
}

export function TVShowCard({
	name,
	image,
	genres,
	summary,
	status,
	premiered,
	ended,
	duration,
	rating,
	language,
}: TVShowCardProps) {
	const theme = useTheme();

	const startingYear = premiered?.split('-')[0];
	const endingYear = ended?.split('-')[0];

	const genreTypes = genres.map((genre) => (
		<GenreWrapper key={genre}>
			<Genre key={genre}>{genre}</Genre>
		</GenreWrapper>
	));

	return (
		<Container>
			<TitleWrapper>
				<Title numberOfLines={1}>
					{name}
					{premiered && ` | ${startingYear}`}
					{status === 'Running'
						? ' - Present'
						: startingYear !== endingYear && ended && ` - ${endingYear}`}
				</Title>
			</TitleWrapper>

			<RowWrapper>
				<ImageWrapper>
					{image ? (
						<Image
							source={{
								uri: image,
							}}
						/>
					) : (
						<MaterialCommunityIcons name="movie-open" size={RFValue(55)} />
					)}
				</ImageWrapper>

				<Content>
					<DetailsWrapper>
						<Details>
							<Ionicons
								name="star"
								color={theme.colors.secondary}
								size={RFValue(18)}
							/>
							<Info>{rating ? rating : '--'}</Info>
						</Details>
						<Details>
							<Ionicons
								name="ios-timer-outline"
								color={theme.colors.secondary}
								size={RFValue(18)}
							/>
							<Info>{duration ? `${duration} min` : '--'}</Info>
						</Details>
						<Details>
							<Ionicons
								name="language"
								color={theme.colors.secondary}
								size={RFValue(18)}
							/>
							<Info>{language ? language : '--'}</Info>
						</Details>
					</DetailsWrapper>

					<Genres>{genreTypes}</Genres>
				</Content>
			</RowWrapper>
		</Container>
	);
}
