import { IBasePlant, IFullPlantInfo } from "../../models/Plant";
import { Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { IconName } from "../../enums/IconName";

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

    //#region Redux Hooks

    const fullPlantInfo: IFullPlantInfo | undefined = useSelector((state: RootState) => {
        return state.plantInfo.plantsInformation
            .find((plant: IFullPlantInfo) => plant.id === props.plant.id)
    })

    //#endregion
    
    return (
        <>
            <TouchableOpacity onPress={props.onPress} style={styles.plantImageWrapper}>
                <Image
                    source={
                        fullPlantInfo
                        ? { uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${fullPlantInfo.imageID}@3x.jpg` }
                        : require(`../../../assets/icons/question-mark.png`)
                    }
                    style={fullPlantInfo ? styles.plantImage : styles.plantImageReplacement} />
            </TouchableOpacity>
            <Text style={styles.plantName}>{props.plant.name}</Text>
        </>
    )
}