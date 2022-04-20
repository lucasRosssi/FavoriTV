import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TVShowDTO } from '../../dtos/TVShowDTO';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};

	padding: 20px 20px 0;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(20)}px;
	color: ${({ theme }) => theme.colors.shape};
`;

export const TVShowsList = styled(
	FlatList as new (props: FlatListProps<TVShowDTO>) => FlatList<TVShowDTO>
)``;
