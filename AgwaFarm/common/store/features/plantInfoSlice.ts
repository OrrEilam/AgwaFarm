import { createSelector, createSlice } from "@reduxjs/toolkit";
import { SliceName } from "../../enums/SliceName";
import { IPlantMenuStore } from "../models";
import { RootState } from "../rootReducer";

/**
 * The initial state of the plant-store to be used in the plant-info-slice.
 */
const initialState: IPlantMenuStore = {
    categorizedPlants: [],
    plantsInformation: [],
}

/**
 * The plant-slice for the plant part of the root-store.
 */
export const plantsInfoSlice = createSlice({
    name: SliceName.PlantInfo,
    initialState,
    reducers: {
        /**
         * Add a collection of categorized plants to the plant-info-store.
         * @param state The current state of the store.
         * @param action The action that was used to trigger this method.
         */
        updateCategorizedPlants: (state, action) => {
            state.categorizedPlants = action.payload;
        },
        /**
         * Add a collection of plants' infos to the plant-info-store.
         * @param state The current state of the store.
         * @param action The action that was used to trigger this method.
         */
         updatePlantsInformations: (state, action) => {
            state.plantsInformation = action.payload;
        },
    },
    extraReducers: () => { },
});

/**
 * Export the main reducer of the slice for convenience.
 */
export default plantsInfoSlice.reducer;

export const { updateCategorizedPlants, updatePlantsInformations } = plantsInfoSlice.actions;

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
