import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCombineReducers } from "redux-persist";

// import auth, { AuthState } from "_features/auth/redux/reducer";

export type RootState = {
	// auth: AuthState;
};

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: [],
};

const appReducer = {
	// auth,
};

export default persistCombineReducers(persistConfig, appReducer);
