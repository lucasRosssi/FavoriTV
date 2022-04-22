import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { ShowDetails, ShowDetailsParams } from '../screens/ShowDetails';
import { Favorites, FavoritesParams } from '../screens/Favorites';

export type AppStackParamList = {
	Dashboard: undefined;
	ShowDetails: ShowDetailsParams;
	Favorites: FavoritesParams;
};

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName="Dashboard"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Dashboard" component={Dashboard} />
			<Screen name="ShowDetails" component={ShowDetails} />
			<Screen name="Favorites" component={Favorites} />
		</Navigator>
	);
}
