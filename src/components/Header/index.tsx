import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { SearchBar } from '../SearchBar';

import { Container, MenuButton } from './styles';

export function Header() {
	const theme = useTheme();

	return (
		<Container>
			<MenuButton>
				<Feather name="menu" size={RFValue(40)} color={theme.colors.shape} />
			</MenuButton>

			<SearchBar />
		</Container>
	);
}
