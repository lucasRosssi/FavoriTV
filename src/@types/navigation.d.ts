import { AppStackParamList } from '../routes/app.routes';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AppStackParamList {}
	}
}
