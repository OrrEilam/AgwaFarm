/**
 * A basic plant-catagory structure.
 */
export interface PlantCatagory {
    id: string;
    name: string;
    minSelection: number;
    maxSelection: number;
}

/**
 * A basic plant structure.
 */
export interface Plant {
    id: string;
    name: string;
    imageURL: string;
    catagory: PlantCatagory;
}