import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface PlusSelectorItemProps {
    onAdd: () => void;
}

export const PlusSelectorItem: React.FC<PlusSelectorItemProps> = (props: PlusSelectorItemProps) => {
    return (
        <TouchableOpacity onPress={props.onAdd} style={styles.container}>
            <Image source={require('../../../../../assets/icons/plus-sign.svg')} style={styles.addIcon} />
        </TouchableOpacity>
    )
}