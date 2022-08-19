import React from 'react';
import { View, Image, Modal, SectionList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PlantItem } from '../../../../common/components/PlantSelectorItem/PlantItem';
import { IconName } from '../../../../common/enums/IconName';
import { WithActionButton } from '../../../../common/hoc/WithActionButton/WithActionButton';
import { IBasePlant, IPlantCatagory } from '../../../../common/models/Plant';
import { addPlant } from '../../../../common/store/features/plantCartSlice';
import { selectCategorizedPlants } from '../../../../common/store/features/plantInfoSlice';
import { MenuSectionHeader } from './MenuHeader/MenuHeader';
import { styles } from "./styles";

/**
 * The structure of the parameters needed for the component.
 */
export interface IMenu {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * A component that views menu for selecting plants.
 * @param props The parameters needed for the component (indicators, events...).
 * @returns The component's JSX render.
 */
export const Menu: React.FC<IMenu> = (props: IMenu) => {

    //#region Redux Hooks

    const dispatch = useDispatch();
    const categorizedPlants: IPlantCatagory[] = useSelector(selectCategorizedPlants);

    //#endregion

    //#region Methods

    /**
     * A method to handle the 'add' event of an icon from the menu.
     * @param plant The plant to add to the cart.
     */
    const onAddPlant = (plant: IBasePlant): void => {
        dispatch(addPlant(plant));
    }

    //#endregion

    return (
        <>
            {
                props.isOpen && (
                    <View style={styles.overlap} />
                )
            }
            <Modal
                animationType='slide'
                transparent={true}
                visible={props.isOpen}
                onRequestClose={props.onClose}
            >
                <View style={styles.container}>
                    <TouchableOpacity onPress={props.onClose} style={styles.closeIconWrapper}>
                        <Image
                            style={styles.closeIcon}
                            source={require(`../../../../assets/icons/${IconName.XSign}.svg`)}
                        />
                    </TouchableOpacity>
                    <SectionList
                        sections={categorizedPlants.map((category: IPlantCatagory) => ({ title: category.name, data: category.plants }))}
                        renderItem={({ item, index }) => {
                            return WithActionButton({
                                component: (
                                    <PlantItem
                                        key={index}
                                        plant={item}
                                        onPress={() => onAddPlant(item)}
                                    />
                                ),
                                onActionPress: () => onAddPlant(item),
                                iconName: IconName.PlusSign,
                            })
                        }}
                        renderSectionHeader={({ section }) => <MenuSectionHeader title={section.title} />}
                    />
                </View>
            </Modal>
        </>
    )
}