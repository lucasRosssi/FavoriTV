import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';

import { Container, Input, SearchButton } from './styles';

export function SearchBar() {
	const theme = useTheme();

	return (
		<Container>
			<Input />

			<SearchButton>
				<Ionicons
					name="search"
					size={RFValue(30)}
					color={theme.colors.background}
				/>
			</SearchButton>
		</Container>
	);
}
