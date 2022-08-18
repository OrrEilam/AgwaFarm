import { combineReducers } from "redux";
import plantCartReducer from "./features/plantCartSlice";

export const rootReducer = combineReducers({
    plantCart: plantCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;