/**
 * A basic plant-catagory structure.
 */
export interface IPlantCatagory {
    id: string;
    name: string;
    minSelection: number;
    maxSelection: number;
}

/**
 * A basic plant structure.
 */
export interface IPlant {
    id: string;
    name: string;
    imageURL: string;
    catagory: IPlantCatagory;
}