import { combineReducers } from "redux";
import plantCartReducer from "./features/plantCartSlice";
import plantInfoReducer from "./features/plantInfoSlice";

export const rootReducer = combineReducers({
    plantCart: plantCartReducer,
    plantInfo: plantInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;