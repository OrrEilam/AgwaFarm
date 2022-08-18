import { IPlant } from "../../../../../common/models/Plant";
import { Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface IPlantSelectorItemProps {
    plant: IPlant;
    onDelete: () => void;
}

export const PlantSelectorItem: React.FC<IPlantSelectorItemProps> = (props: IPlantSelectorItemProps) => {
    return (
        <>
            <TouchableOpacity onPress={props.onDelete} style={styles.plantImageWrapper}>
                <Image source={require('../../../../../assets/images/leaf.png')} style={styles.plantImage} />
                <Image source={require('../../../../../assets/icons/minus-sign.svg')} style={styles.deleteIcon} />
            </TouchableOpacity>
            <Text style={styles.plantName}>{props.plant.name}</Text>
        </>
    )
}