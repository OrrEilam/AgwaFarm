import { IBasePlant } from "../../models/Plant";
import { Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
import { ImageName } from "../../enums/ImageName";

/**
 * The structure of the parameters needed for the component.
 */
export interface IPlantItemProps {
    plant: IBasePlant;
    onPress: () => void;
}

/**
 * A component that views a basic plant-item with it's name & icon.
 * @param props The parameters needed for the component (plant-info, events...).
 * @returns The component's JSX render.
 */
export const PlantItem: React.FC<IPlantItemProps> = (props: IPlantItemProps) => {
    return (
        <>
            <TouchableOpacity onPress={props.onPress} style={styles.plantImageWrapper}>
                <Image source={require(`../../../assets/images/${ImageName.Leaf}.png`)} style={styles.plantImage} />
            </TouchableOpacity>
            <Text style={styles.plantName}>{props.plant.name}</Text>
        </>
    )
}