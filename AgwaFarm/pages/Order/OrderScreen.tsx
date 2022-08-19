import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { CTAButton } from '../../common/components/CTAButton/CTAButton';
import { IBasePlant } from '../../common/models/Plant';
import { selectPlantCartContents, selectPlantCartMaxItems } from '../../common/store/features/plantCartSlice';
import { Header } from './components/Header/Header';
import { Introduction } from './components/Intoduction/Introduction';
import { Menu } from './components/Menu/Menu';
import { Selector } from './components/Selector/Selector';
import { styles } from './styles';

/**
 * A component for the OREDER screen.
 * @returns The component's JSX render.
 */
export const OrderScreen: React.FC<{}> = () => {

    //#region Redux Hooks

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