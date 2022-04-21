import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { ShowDetails, ShowDetailsParams } from '../screens/ShowDetails';

export type AppStackParamList = {
	Dashboard: undefined;
	ShowDetails: ShowDetailsParams;
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
		</Navigator>
	);
}
