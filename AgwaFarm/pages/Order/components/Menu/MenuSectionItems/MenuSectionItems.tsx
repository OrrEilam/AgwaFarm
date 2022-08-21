import React from "react"
import { FlatList } from "react-native"
import { PlantItem } from "../../../../../common/components/PlantSelectorItem/PlantItem"
import { ActionType, WithActionButton } from "../../../../../common/hoc/WithActionButton/WithActionButton"
import { WithStyledWrapper } from "../../../../../common/hoc/WithStyledWrapper/WithStyledWrapper"
import { IBasePlant } from "../../../../../common/models/Plant"
import { styles } from "./styles"

/**
 * The structure of the parameters needed for the component.
 */
export interface IMenuSectionItemsProps {
    plants: IBasePlant[];
    onAddPlant: (plant: IBasePlant) => void;
}

/**
 * A component that views a section in the menu.
 * @param props The parameters needed for the component (data, events...).
 * @returns The component's JSX render.
 */
export const MenuSectionItems: React.FC<IMenuSectionItemsProps> = (props: IMenuSectionItemsProps) => {
    return (
        <FlatList
            horizontal={true}
            data={props.plants}
            style={styles.wrapper}
            renderItem={({ item, index }) => {
                return WithStyledWrapper({
                    styles: styles.menuItem,
                    component: WithActionButton({
                        component: (
                            <PlantItem
                                key={index}
                                plant={item}
                                onPress={() => props.onAddPlant(item)}
                            />
                        ),
                        onActionPress: () => props.onAddPlant(item),
                        action: ActionType.Add,
                    })
                })
            }}
            showsHorizontalScrollIndicator={false}
        />
    )
}