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

export const Image = styled.Image`
	width: ${RFValue(110)}px;
	height: ${RFValue(110)}px;
`;

export const Content = styled.View`
	flex: 1;
`;

export const AboutWrapper = styled.View`
	flex: 1;

	padding: 5px;
`;

export const About = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.shape};
`;
