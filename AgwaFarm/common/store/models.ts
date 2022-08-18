import { IBasePlant, IFullPlantInfo, IPlantCatagory } from "../models/Plant";

/**
 * The structure of the plant-cart part of the store.
 */
export interface IPlantCartStore {
    plants: IBasePlant[];
    maxItems: number;
}

/**
 * The structure of the plant-info part of the store.
 */
export interface IPlantMenuStore {
    categorizedPlants: IPlantCatagory[];
    plantsInformation: IFullPlantInfo[];
}