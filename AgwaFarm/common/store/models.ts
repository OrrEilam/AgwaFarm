import { IPlant } from "../models/Plant";

/**
 * The structure of the plant part of the store.
 */
export interface IPlantStore {
    plants: IPlant[];
    maxItems: number;
}

/**
 * An enum for the slice-names, to prevent the usage of magic-strings.
 */
export enum SliceName {
    Plant = 'plant',
}