import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type HomeStackParamsList = {
	Begin: undefined;
};

/**
 * screens
 */
export type HomeStackScreenProps = StackScreenProps<
	HomeStackParamsList,
	keyof HomeStackParamsList
>;

type HomeRoutesNames = keyof HomeStackParamsList;

/**
 * useNavigation hook
 */
export type HomeStackNavigationProps<RouteName extends HomeRoutesNames> =
	StackNavigationProp<HomeStackParamsList, RouteName>;

/**
 * useRoute hook
 */
export type HomeStackRouteProps<RouteName extends HomeRoutesNames> = RouteProp<
	HomeStackParamsList,
	RouteName
>;
