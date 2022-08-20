import { IFullPlantInfo, IPlantCatagory } from "../../models/Plant";
import { CATEGORIZED_PLANTS } from "../../../assets/data/categories";
import { PLANTS } from "../../../assets/data/plants";

//#region Constants

const CATEGORIZED_PLANTS_URL: string = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
const PLANTS_INFORMATIONS_URL: string = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

//#endregion

//#region Implementations

/**
 * A method to retrieve the plants' informations.
 * @returns An array of full-plant-informations.
 */
const getPlantsInformations = (): IFullPlantInfo[] => {
    return PLANTS;
    // TODO: consume the data from axios instead of the file.
    // return axios.get(PLANTS_INFORMATIONS_URL)
    //     .then((response) => {
    //         console.debug(response);
    //         console.debug(response.data);
    //         return response.data;
    //     });
}

/**
 * A method to retrieve the categorized plants.
 * @returns An array of categorized-plants.
 */
const getCategorizedPlants = (): IPlantCatagory[] => {
    return CATEGORIZED_PLANTS;
    // TODO: consume the data from axios instead of the file.
    // return axios.get(CATEGORIZED_PLANTS_URL)
    //     .then((response) => {
    //         console.debug(response);
    //         console.debug(response.data);
    //         return response.data;
    //     });
}

//#endregion

/**
 * An interface to describe the structure of the catalog's API.
 */
export interface ICatalogAPI {
    getPlantsInformations: () => IFullPlantInfo[];
    getCategorizedPlants: () => IPlantCatagory[];
}

/**
 * The instance of the catalog's API.
 */
export const CatalogAPI: ICatalogAPI = {
    getPlantsInformations: getPlantsInformations,
    getCategorizedPlants: getCategorizedPlants,
}