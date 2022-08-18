import React from "react";
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { IPlant } from "../../../../common/models/Plant";
import { deletePlant, selectPlantCartMaxItems, selectPlantCartContents } from "../../../../common/store/features/plantCartSlice";
import { PlantSelectorItem } from "./PlantSelectorItem/PlantSelectorItem";
import { PlusSelectorItem } from "./PlusSelectorItem/PlusSelectorItem";
import { SelectorItemWrapper } from "./SelectorItemWrapper/SelectorItemWrapper";
import { styles } from "./styles"

export const Selector: React.FC = () => {

    const dispatch = useDispatch();
    const plants: IPlant[] = useSelector(selectPlantCartContents);
    const maxNumberOfPlants: number = useSelector(selectPlantCartMaxItems);

    const onItemDelete = (item: IPlant): void => {
        dispatch(deletePlant(item));
    }
    
    const onItemAdd = (): void => {
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your selected plants:
            </Text>
            <View style={styles.selector}>
                {
                    plants.map((item: IPlant, index: number) => {
                        return SelectorItemWrapper(
                            index,
                            <PlantSelectorItem
                                key={index}
                                plant={item}
                                onDelete={() => onItemDelete(item)}
                            />
                        )
                    })
                }
                {
                    (new Array(maxNumberOfPlants - plants.length)).fill(0).map((item: number, index: number) => {
                        return SelectorItemWrapper(
                            index,
                            <PlusSelectorItem
                                key={index}
                                onAdd={() => onItemAdd()}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
};