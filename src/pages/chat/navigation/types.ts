import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type ChatStackParamsList = {
	Chat: undefined;
};

/**
 * screens
 */
export type ChatStackScreenProps = StackScreenProps<
	ChatStackParamsList,
	keyof ChatStackParamsList
>;

type ChatRoutesNames = keyof ChatStackParamsList;

/**
 * useNavigation hook
 */
export type ChatStackNavigationProps<RouteName extends ChatRoutesNames> =
	StackNavigationProp<ChatStackParamsList, RouteName>;

/**
 * useRoute hook
 */
export type ChatStackRouteProps<RouteName extends ChatRoutesNames> = RouteProp<
	ChatStackParamsList,
	RouteName
>;
