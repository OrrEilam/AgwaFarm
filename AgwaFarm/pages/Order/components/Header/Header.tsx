import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScreenName } from "../../../../common/enums/ScreenName";
import { styles } from "./styles";

/**
 * The structure of the parameters needed for the component.
 */
export interface IHeaderProps {
    onClose: () => void;
}

/**
 * A component that views the header of the page.
 * @param props The parameters needed for the component (events...).
 * @returns The component's JSX render.
 */
export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {ScreenName.Order}
            </Text>
            <TouchableOpacity style={styles.closeIconWrapper} onPress={props.onClose}>
                <Image source={require('../../../../assets/icons/x-sign.png')} style={styles.closeIcon} />
            </TouchableOpacity>
        </View>
    )
}