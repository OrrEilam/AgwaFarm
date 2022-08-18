import { createSlice, createSelector, current } from "@reduxjs/toolkit";
import { IPlant, IPlantCatagory } from "../../models/Plant";
import { IPlantStore, SliceName } from "../models";
import { RootState } from "../rootReducer";

//#region Constants

const MAX_SELECTABLES: number = 5;

const catagories: IPlantCatagory[] = [
    {
        id: "green_head",
        name: "Green Head",
        minSelection: 0,
        maxSelection: 5,
    },
    {
        id: "greens",
        name: "Greens",
        minSelection: 0,
        maxSelection: 5,
    },
    {
        id: "vines",
        name: "Vines",
        minSelection: 0,
        maxSelection: 2,
    },
]

const plants: IPlant[] = [
    {
        id: "pac_choi_mei_qing_choi",
        name: "Pac Choi - Mei Qing Choi",
        catagory: catagories[0],
        imageURL: '',
    },
    {
        id: "arugula_esmee",
        name: "Arugula - Esmee",
        catagory: catagories[1],
        imageURL: '',
    },
    {
        id: "cucumber_iznik",
        name: "Cucumber - Iznik",
        catagory: catagories[2],
        imageURL: '',
    },
]

//#endregion

/**
 * The initial state of the plat-store to be used in the plant-slice.
 */
const initialState: IPlantStore = {
    maxItems: MAX_SELECTABLES,
    plants: plants,
};

/**
 * The plant-slice for the plant part of the root-store.
 */
export const plantsCartSlice = createSlice({
    name: SliceName.Plant,
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
 * Define a base selector for the 'plant' part of the root-store.
 * @param state The root-state of the root-store.
 * @returns The plant part of the root-store.
 */
export const basePlantSelect = (state: RootState) => state.plantCart;

export const selectPlantCartContents = createSelector(basePlantSelect, (state) => state.plants);
export const selectPlantCartMaxItems = createSelector(basePlantSelect, (state) => state.maxItems);

//#endregion