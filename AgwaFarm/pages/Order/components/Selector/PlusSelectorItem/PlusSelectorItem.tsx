import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface IPlusSelectorItemProps {
    onAdd: () => void;
}

export const PlusSelectorItem: React.FC<IPlusSelectorItemProps> = (props: IPlusSelectorItemProps) => {
    return (
        <TouchableOpacity onPress={props.onAdd} style={styles.container}>
            <Image source={require('../../../../../assets/icons/plus-sign.svg')} style={styles.addIcon} />
        </TouchableOpacity>
    )
}