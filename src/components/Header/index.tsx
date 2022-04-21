import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { useShow } from '../../hooks/useShow';
import { useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { SearchBar } from '../SearchBar';

import { Container, MenuButton, Title } from './styles';
import { AppStackParamList } from '../../routes/app.routes';
import { BackButton } from '../BackButton';

interface HeaderProps {
	handleSearch?: (query: string) => Promise<void>;
}

export function Header({ handleSearch }: HeaderProps) {
	const theme = useTheme();
	const { showTitle } = useShow();
	const route = useRoute();
	const routeName = route.name as keyof AppStackParamList;

	return (
		<Container>
			{routeName === 'Dashboard' && (
				<>
					<MenuButton>
						<Feather
							name="menu"
							size={RFValue(40)}
							color={theme.colors.shape}
						/>
					</MenuButton>

					<SearchBar handleSearch={handleSearch} />
				</>
			)}
			{routeName === 'ShowDetails' && (
				<>
					<BackButton />

					<Title numberOfLines={1}>{showTitle}</Title>
				</>
			)}
		</Container>
	);
}
