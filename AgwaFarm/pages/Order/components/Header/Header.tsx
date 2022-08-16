import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScreenName } from "../../../../common/enums/ScreenName";
import { styles } from "./styles";

export interface HeaderProps {
    onClose: () => void;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {ScreenName.Order}
            </Text>
            <TouchableOpacity style={styles.exit} onPress={props.onClose}>
                <Image source={require('../../../../assets/icons/x-sign.svg')} style={styles.closeIcon} />
            </TouchableOpacity>
        </View>
    )
}