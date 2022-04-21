import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

export function BackButton() {
	const theme = useTheme();
	const { goBack } = useNavigation();

	return (
		<TouchableOpacity onPress={goBack}>
			<Feather
				name="chevron-left"
				size={RFValue(40)}
				color={theme.colors.shape}
			/>
		</TouchableOpacity>
	);
}
