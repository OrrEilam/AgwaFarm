import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

/**
 * The structure of the parameters needed for the component.
 */
export interface IPlusSelectorItemProps {
    onAdd: () => void;
}

/**
 * A component for a plus-icon in the selector.
 * @param props The parameters needed for the component (events...).
 * @returns The component's JSX render.
 */
export const PlusSelectorItem: React.FC<IPlusSelectorItemProps> = (props: IPlusSelectorItemProps) => {
    return (
        <TouchableOpacity onPress={props.onAdd} style={styles.container}>
            <Image source={require(`../../../../../assets/icons/plus-sign.svg`)} style={styles.addIcon} />
        </TouchableOpacity>
    )
}