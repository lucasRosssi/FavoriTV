import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		padding: 20,
	},
	showsVerticalScrollIndicator: false,
})`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Details = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};

	align-items: center;

	margin-bottom: 20px;

	border-radius: 10px;

	overflow: hidden;

	shadow-color: #000;
	shadow-offset: 0 2px;
	shadow-opacity: 0.25;
	shadow-radius: 3.84px;

	elevation: 5;
`;

export const ImageWrapper = styled.View`
	width: 100%;
	height: ${RFValue(300)}px;

	background-color: ${({ theme }) => theme.colors.secondary};

	align-items: center;
	justify-content: center;

	margin-bottom: 7px;
`;

export const Image = styled.Image`
	width: 100%;
	aspect-ratio: ${622 / 937}

	margin-bottom: 7px;
`;

export const DetailsItem = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;

	padding: 7px 10px;
`;

export const Item = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.shape};

	margin-right: 12px;
`;

export const Text = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const Genres = styled.View`
	flex-direction: row;
	justify-content: flex-end;

	margin: 20px 0;
`;

export const GenreWrapper = styled.View`
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 5px;

	padding: 0 5px;

	margin-left: 5px;
`;

export const Genre = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(9)}px;
	color: ${({ theme }) => theme.colors.shape};
`;
