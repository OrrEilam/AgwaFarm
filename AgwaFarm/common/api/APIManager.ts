import { CatalogAPI, ICatalogAPI } from "./catalog/CatalogAPI";
import { IServerAPI, ServerAPI } from "./server/ServerAPI";

/**
 * An interface to describe the structure of the API manager.
 */
export interface IAPIManager {
    Catalog: ICatalogAPI;
    Server: IServerAPI;
}

/**
 * The instance of the API manager.
 */
export const APIManager: IAPIManager = {
    Catalog: CatalogAPI,
    Server: ServerAPI,
}