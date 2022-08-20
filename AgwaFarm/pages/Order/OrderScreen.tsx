import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { addPlant, selectPlantCartContents, selectPlantCartMaxItems } from '../../common/store/features/plantCartSlice';
import { updatePlantsInformations, updateCategorizedPlants } from '../../common/store/features/plantInfoSlice';
import { IBasePlant, IFullPlantInfo, IPlantCatagory, PlantID } from '../../common/models/Plant';
import { APIManager } from '../../common/api/APIManager';
import { CTAButton } from '../../common/components/CTAButton/CTAButton';
import { Introduction } from './components/Intoduction/Introduction';
import { Selector } from './components/Selector/Selector';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { styles } from './styles';

/**
 * A component for the OREDER screen.
 * @returns The component's JSX render.
 */
export const OrderScreen: React.FC<{}> = () => {

    //#region Redux Hooks

    const dispatch = useDispatch();
    const plantCart: IBasePlant[] = useSelector(selectPlantCartContents);
    const maxCartItems: number = useSelector(selectPlantCartMaxItems);

    //#endregion

    //#region States

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    //#endregion

    //#region Methods

    /**
     * A method to handle the closing of that screen that was triggered from the header.
     */
    const handleOnClose = (): void => {
        // TODO: Implement a close-order-screen functionality in the future.
    }

    /**
     * A method to handle the saving of the cart triggered by the footer.
     */
    const handeOnSave = (): void => {
        // TODO: Implement a save mechanism.
    }

    //#endregion

    //#region Lifecycle Methods

    useEffect(() => {
        APIManager.Catalog.getPlantsInformations()
            .then((plantsInformations: IFullPlantInfo[]) => dispatch(updatePlantsInformations(plantsInformations)))
            .catch((error) => {});
        APIManager.Catalog.getCategorizedPlants()
            .then((categorizedPlants: IPlantCatagory[]) => dispatch(updateCategorizedPlants(categorizedPlants)))
            .catch((error) => {});
        APIManager.Server.getDefaultPlants()
            .then((plants: IBasePlant[]) => plants.forEach((plant: IBasePlant) => dispatch(addPlant(plant))))
            .catch((error) => {});
    }, [])


    //#endregion

    return (
        <View style={styles.container}>
            <Header onClose={handleOnClose} />
            <View style={styles.content}>
                <Introduction />
                <Selector onPlantAdd={() => setIsMenuOpen(true)} />
            </View>
            <View style={styles.saveButtonContainer}>
                <CTAButton
                    onPress={handeOnSave}
                    text='Save Changes'
                    disabled={plantCart.length < maxCartItems}
                />
            </View>
            <Menu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </View>
    );
};