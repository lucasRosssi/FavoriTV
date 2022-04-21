import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};

	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: ${getStatusBarHeight() + 15}px 20px 15px;

	shadow-color: #000;
	shadow-offset: 0 4px;
	shadow-opacity: 0.3;
	shadow-radius: 4.65px;

	elevation: 10;
`;

export const MenuButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5,
})``;

export const Title = styled.Text`
	max-width: 82%;

	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.shape};
`;
