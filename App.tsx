import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
	Poppins_400Regular,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { ShowProvider } from './src/contexts/ShowContext';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ThemeProvider theme={theme}>
			<ShowProvider>
				<StatusBar translucent backgroundColor="transparent" style="light" />
				<Routes />
			</ShowProvider>
		</ThemeProvider>
	);
}
