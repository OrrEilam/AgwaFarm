/**
 * A definition of the plant's ID type.
 */
export type PlantID = string;

/**
 * A definition of a category's ID type.
 */
 export type CategoryID = string;

/**
 * A basic plant-catagory structure.
 */
export interface IPlantCatagory {
    id: CategoryID;
    name: string;
    minSelection: number;
    maxSelection: number;
    plants: IBasePlant[];
}

/**
 * A basic plant structure.
 */
export interface IBasePlant {
    id: PlantID;
    name: string;
}

/**
 * An extended full-info version of a plant.
 */
export interface IFullPlantInfo extends IBasePlant {
    imageID: string;
    seedToCrop: string;
    yield: string;
    lifeCycle: string;
    description: string;
    nutritionFacts: INutritionInfo;
}

/**
 * The basic structure of the nutritional value of a plant.
 */
export interface INutritionInfo {
    portionInfo: string;
    items: INutritionItemInfo[];
}

/**
 * The basic structure of a nutritional item's info.
 */
export interface INutritionItemInfo {
    key: string;
    nutrientValue: string;
    percentageOfRDA: string;
}