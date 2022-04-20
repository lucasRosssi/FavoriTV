import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 80%;
	height: ${RFValue(45)}px;
	background-color: ${({ theme }) => theme.colors.shape};

	flex-direction: row;
	align-items: center;

	border-radius: 25px;

	padding-left: 10px;
`;

export const Input = styled.TextInput`
	flex: 1;

	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(15)}px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const SearchButton = styled.TouchableOpacity`
	width: ${RFValue(45)}px;
	height: ${RFValue(45)}px;
	background-color: ${({ theme }) => theme.colors.secondary};

	border-top-right-radius: 25px;
	border-bottom-right-radius: 25px;

	align-items: center;
	justify-content: center;
`;
