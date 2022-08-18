import React from "react";
import { View, Text } from "react-native"
import { Plant } from "../../../../common/models/Plant";
import { PlantSelectorItem } from "./PlantSelectorItem/PlantSelectorItem";
import { PlusSelectorItem } from "./PlusSelectorItem/PlusSelectorItem";
import { SelectorItemWrapper } from "./SelectorItemWrapper/SelectorItemWrapper";
import { styles } from "./styles"

const plants: Plant[] = [
    {
        name: 'Lettuce Lettuce',
        imageURL: '',
        catagory: 'Green Head'
    },
    {
        name: 'Romain',
        imageURL: '',
        catagory: 'Green Head'
    },
    {
        name: 'Parsley',
        imageURL: '',
        catagory: 'Greens'
    },
    // {
    //     name: 'Lettuce Lettuce',
    //     imageURL: '',
    //     catagory: 'Green Head'
    // },
    // {
    //     name: 'Romain',
    //     imageURL: '',
    //     catagory: 'Green Head'
    // },
]

const MAX_SELECTABLES: number = 5;

export const Selector: React.FC = () => {

    const onItemDelete = (item: Plant, index: number): void => {
        alert(`delete: ${item.name}, ${index}`);
    }

    const onItemAdd = (index: number): void => {
        alert(`add: ${index}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your selected plants:
            </Text>
            <View style={styles.selector}>
                {
                    plants.map((item: Plant, index: number) => {
                        return SelectorItemWrapper(
                            index,
                            <PlantSelectorItem
                                key={index}
                                plant={item}
                                onDelete={() => onItemDelete(item, index)}
                            />
                        )
                    })
                }
                {
                    (new Array(MAX_SELECTABLES - plants.length)).fill(0).map((item: number, index: number) => {
                        return SelectorItemWrapper(
                            index,
                            <PlusSelectorItem
                                key={index}
                                onAdd={() => onItemAdd(index)}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}