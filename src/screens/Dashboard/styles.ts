import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { MovieDTO } from '../../dtos/MovieDTO';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text``;

export const MovieList = styled(
	FlatList as new (props: FlatListProps<MovieDTO>) => FlatList<MovieDTO>
)``;
