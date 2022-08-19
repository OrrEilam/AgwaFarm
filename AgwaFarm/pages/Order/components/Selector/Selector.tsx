import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deletePlant, selectPlantCartMaxItems, selectPlantCartContents } from "../../../../common/store/features/plantCartSlice";
import { PlantItem } from "../../../../common/components/PlantSelectorItem/PlantItem";
import { WithActionButton } from "../../../../common/hoc/WithActionButton/WithActionButton";
import { PlusSelectorItem } from "./PlusSelectorItem/PlusSelectorItem";
import { IBasePlant } from "../../../../common/models/Plant";
import { IconName } from "../../../../common/enums/IconName";
import { styles } from "./styles";
import { WithStyledWrapper } from "../../../../common/hoc/WithStyledWrapper/WithStyledWrapper";

/**
 * The structure of the parameters needed for the component.
 */
export interface ISelectorProps {
    onPlantAdd: () => void;
}

/**
 * A component that views the plant-selector.
 * @param props The parameters needed for the component (events...).
 * @returns The component's JSX render.
 */
export const Selector: React.FC<ISelectorProps> = (props: ISelectorProps) => {

    //#region Redux Hooks

    const dispatch = useDispatch();
    const plants: IBasePlant[] = useSelector(selectPlantCartContents);
    const maxNumberOfPlants: number = useSelector(selectPlantCartMaxItems);

    //#endregion

    //#region Methods

    /**
     * A method to handle the delete functionallity of an item in the selector.
     * @param item The item to delete.
     */
    const onPlantDelete = (item: IBasePlant): void => {
        dispatch(deletePlant(item));
    }

    /**
     * A method to handle the 'add' functionallity of an item in the selector.
     * This triggers the parent's handler which will allow the user to add an item.
     */
    const onPlantAdd = (): void => {
        props.onPlantAdd();
    }

    //#endregion

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your selected plants:
            </Text>
            <View style={styles.selector}>
                {/* The already selected plants. */}
                {
                    plants.map((item: IBasePlant, index: number) => {
                        return WithStyledWrapper({
                            styles: styles.selectorItem,
                            component: (
                                WithActionButton({
                                    component: (
                                        <PlantItem
                                            key={index}
                                            plant={item}
                                            onPress={() => onPlantDelete(item)}
                                        />
                                    ),
                                    onActionPress: () => onPlantDelete(item),
                                    iconName: IconName.MinusSign,
                                })
                            )
                        })
                    })
                }
                {/* The empty selectable places. */}
                {
                    (new Array(maxNumberOfPlants - plants.length)).fill(0).map((item: number, index: number) => {
                        return WithStyledWrapper({
                            styles: styles.selectorItem,
                            component: (
                                <PlusSelectorItem
                                    key={index}
                                    onAdd={() => onPlantAdd()}
                                />
                            )
                        })
                    })
                }
            </View>
        </View>
    )
};