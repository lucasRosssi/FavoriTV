import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { SearchBar } from '../SearchBar';

import { Container, MenuButton } from './styles';

interface HeaderProps {
	handleSearch: (query: string) => Promise<void>;
}

export function Header({ handleSearch }: HeaderProps) {
	const theme = useTheme();

	return (
		<Container>
			<MenuButton>
				<Feather name="menu" size={RFValue(40)} color={theme.colors.shape} />
			</MenuButton>

			<SearchBar handleSearch={handleSearch} />
		</Container>
	);
}
