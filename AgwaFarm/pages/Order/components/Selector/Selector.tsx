import React from "react";
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { IBasePlant } from "../../../../common/models/Plant";
import { deletePlant, selectPlantCartMaxItems, selectPlantCartContents } from "../../../../common/store/features/plantCartSlice";
import { PlantSelectorItem } from "./PlantSelectorItem/PlantSelectorItem";
import { PlusSelectorItem } from "./PlusSelectorItem/PlusSelectorItem";
import { SelectorItemWrapper } from "./SelectorItemWrapper/SelectorItemWrapper";
import { styles } from "./styles"

export interface ISelectorProps {
    onPlantAdd: () => void;
}

export const Selector: React.FC<ISelectorProps> = (props: ISelectorProps) => {

    const dispatch = useDispatch();
    const plants: IBasePlant[] = useSelector(selectPlantCartContents);
    const maxNumberOfPlants: number = useSelector(selectPlantCartMaxItems);

    const onPlantDelete = (item: IBasePlant): void => {
        dispatch(deletePlant(item));
    }
    
    const onPlantAdd = (): void => {
        props.onPlantAdd();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your selected plants:
            </Text>
            <View style={styles.selector}>
                {
                    plants.map((item: IBasePlant, index: number) => {
                        return SelectorItemWrapper(
                            index,
                            <PlantSelectorItem
                                key={index}
                                plant={item}
                                onDelete={() => onPlantDelete(item)}
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
                                onAdd={() => onPlantAdd()}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
};