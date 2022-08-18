import { createSlice, createSelector, current } from "@reduxjs/toolkit";
import { SliceName } from "../../enums/SliceName";
import { IBasePlant } from "../../models/Plant";
import { IPlantCartStore } from "../models";
import { RootState } from "../rootReducer";

//#region Constants

const MAX_SELECTABLES: number = 5;

//#endregion

/**
 * The initial state of the plant-store to be used in the plant-cart-slice.
 */
const initialState: IPlantCartStore = {
    maxItems: MAX_SELECTABLES,
    plants: [],
};

/**
 * The plant-slice for the plant part of the root-store.
 */
export const plantsCartSlice = createSlice({
    name: SliceName.PlantCart,
    initialState,
    reducers: {
        /**
         * Add a given plant to the plant-store. 
         * @param state The current state of the store.
         * @param action The action that was used to trigger this method.
         */
        addPlant: (state, action) => {
            if (state.plants.length < MAX_SELECTABLES) {
                state.plants.push(action.payload);
            }
        },
        /**
         * Delete a given plant from the plant-store.
         * @param state The current state of the store.
         * @param action The action that was used to trigger this method.
         */
        deletePlant: (state, action) => {
            const currentStateValue = current(state);
            const plantIndex: number = currentStateValue.plants.findIndex((item) => item === action.payload);
            
            if (plantIndex !== -1) {
                let newPlants = [...currentStateValue.plants];
                newPlants.splice(plantIndex, 1);
                state.plants = newPlants;
            }
        },
    },
    extraReducers: () => {},
});

/**
 * Export the main reducer of the slice for convenience.
 */
export default plantsCartSlice.reducer;

export const { addPlant, deletePlant } = plantsCartSlice.actions;

//#region Selectors

/**
 * Define a base selector for the 'plant-cart' part of the root-store.
 * @param state The root-state of the root-store.
 * @returns The plant part of the root-store.
 */
export const basePlantSelect = (state: RootState) => state.plantCart;

export const selectPlantCartContents = createSelector(basePlantSelect, (state) => state.plants);
export const selectPlantCartMaxItems = createSelector(basePlantSelect, (state) => state.maxItems);

//#endregion