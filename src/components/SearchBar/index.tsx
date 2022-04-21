import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';

import { Container, Input, SearchButton } from './styles';
import { Keyboard } from 'react-native';

interface SearchBarProps {
	handleSearch?: (query: string) => Promise<void>;
}

export function SearchBar({ handleSearch }: SearchBarProps) {
	const theme = useTheme();

	const [query, setQuery] = useState('');

	function handlePressButton() {
		Keyboard.dismiss();
		handleSearch!(query);
	}

	return (
		<Container>
			<Input
				placeholder="Search for a TV show..."
				value={query}
				onChangeText={setQuery}
				onSubmitEditing={() => handleSearch!(query)}
				blurOnSubmit
				autoCorrect={false}
				autoCapitalize="none"
			/>

			<SearchButton onPress={handlePressButton}>
				<Ionicons
					name="search"
					size={RFValue(30)}
					color={theme.colors.background}
				/>
			</SearchButton>
		</Container>
	);
}
