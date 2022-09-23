import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./reducers";

export const useReducerSelector: TypedUseSelectorHook<RootState> = useSelector;
