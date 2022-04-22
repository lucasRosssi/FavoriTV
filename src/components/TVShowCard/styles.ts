import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};

	margin-bottom: 20px;

	border-radius: 10px;

	overflow: hidden;

	shadow-color: #000;
	shadow-offset: 0 2px;
	shadow-opacity: 0.25;
	shadow-radius: 3.84px;

	elevation: 5;
`;

export const TitleWrapper = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.shadow};

	padding: 4px 10px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const RowWrapper = styled.View`
	width: 100%;
	flex-direction: row;
`;

export const ImageWrapper = styled.View`
	width: ${RFValue(90)}px;
	height: ${RFValue(125)}px;
	background-color: ${({ theme }) => theme.colors.secondary};

	align-items: center;
	justify-content: center;
`;

export const Image = styled.Image`
	width: ${RFValue(90)}px;
	height: ${RFValue(125)}px;
`;

export const Content = styled.View`
	flex: 1;

	padding: 10px;
`;

export const DetailsWrapper = styled.View`
	width: 40%;

	padding: 5px;
`;

export const Details = styled.View`
	flex-direction: row;
	align-items: center;

	margin-bottom: 10px;
`;

export const Info = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.shape};
	line-height: ${RFValue(18)}px;

	margin-left: 5px;
`;

export const Genres = styled.View`
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;

	padding-bottom: 5px;
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
