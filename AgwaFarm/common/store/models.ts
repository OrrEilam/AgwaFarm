import { Plant } from "../models/Plant";

/**
 * The structure of the plant part of the store.
 */
export interface PlantStore {
    plants: Plant[];
    maxItems: number;
}

/**
 * An enum for the slice-names, to prevent the usage of magic-strings.
 */
export enum SliceName {
    Plant = 'plant',
}