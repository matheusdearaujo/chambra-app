import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type MainStackParamsList = {
	HomeRoutes: undefined;
	ChatRoutes: {
		username: string;
		color: string;
	};
};

/**
 * screens
 */
export type MainStackScreenProps = StackScreenProps<
	MainStackParamsList,
	keyof MainStackParamsList
>;

type MainRoutesNames = keyof MainStackParamsList;

/**
 * useNavigation hook
 */
export type MainStackNavigationProps<RouteName extends MainRoutesNames> =
	StackNavigationProp<MainStackParamsList, RouteName>;

/**
 * useRoute hook
 */
export type MainStackRouteProps<RouteName extends MainRoutesNames> = RouteProp<
	MainStackParamsList,
	RouteName
>;
