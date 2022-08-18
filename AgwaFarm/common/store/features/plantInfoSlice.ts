import { createSelector, createSlice, current } from "@reduxjs/toolkit";
import { CATEGORIZED_PLANTS } from "../../../assets/categories";
import { PLANTS } from "../../../assets/plants";
import { SliceName } from "../../enums/SliceName";
import { IPlantMenuStore } from "../models";
import { RootState } from "../rootReducer";

/**
 * The initial state of the plant-store to be used in the plant-info-slice.
 */
const initialState: IPlantMenuStore = {
    categorizedPlants: CATEGORIZED_PLANTS,
    plantsInformation: PLANTS,
}

/**
 * The plant-slice for the plant part of the root-store.
 */
export const plantsInfoSlice = createSlice({
    name: SliceName.PlantInfo,
    initialState,
    reducers: {},
    extraReducers: () => { },
});

/**
 * Export the main reducer of the slice for convenience.
 */
 export default plantsInfoSlice.reducer;

 export const { } = plantsInfoSlice.actions;

 //#region Selectors

/**
 * Define a base selector for the 'plant-info' part of the root-store.
 * @param state The root-state of the root-store.
 * @returns The plant part of the root-store.
 */
export const basePlantSelect = (state: RootState) => state.plantInfo;

export const selectCategorizedPlants = createSelector(basePlantSelect, (state) => state.categorizedPlants);
export const selectPlantsInfos = createSelector(basePlantSelect, (state) => state.plantsInformation);
//#endregion
