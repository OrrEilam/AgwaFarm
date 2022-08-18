import { Plant } from "../../../../../common/models/Plant";
import { Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface PlantSelectorItemProps {
    plant: Plant;
    onDelete: () => void;
}

export const PlantSelectorItem: React.FC<PlantSelectorItemProps> = (props: PlantSelectorItemProps) => {
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