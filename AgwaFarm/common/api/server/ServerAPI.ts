import { IBasePlant } from "../../models/Plant"

//#region Constants

const DEFAULTS: IBasePlant[] = [
    {
        id: 'chard_bright_lights',
        name: 'Chard - Bright Lights',
    },
    {
        id: 'lettuce_cherokee',
        name: 'Lettuce - Cherokee',
    },
    {
        id: 'tomato_sunrise',
        name: 'Tomato - Sunrise',
    },
    {
        id: 'lettuce_red_butter',
        name: 'Lettuce - Red Butter',
    },
    {
        id: 'mustard_greens_red_giant',
        name: 'Mustard Greens - Red Giant',
    },
]

//#endregion

//#region Implementations

/**
 * 
 * @returns 
 */
const getDefaultPlants = (): Promise<IBasePlant[]> => {
    return new Promise<IBasePlant[]>((resolve, reject) => {
        resolve(DEFAULTS);
        // TODO: replace the usage of DEFAULTS with an actual server request for the defaults of the user.
    });
}

const updateExpoToken = (token: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        // TODO: send the expo-token to the server so it can send push-notifications. 
    })
}

//#endregion

/**
 * An interface to describe the structure of the server's API.
 */
export interface IServerAPI {
    getDefaultPlants: () => Promise<IBasePlant[]>;
    updateExpoToken: (token: string) => Promise<void>;
}

/**
 * The instance of the server's API.
 */
export const ServerAPI: IServerAPI = {
    getDefaultPlants: getDefaultPlants,
    updateExpoToken: updateExpoToken,
}