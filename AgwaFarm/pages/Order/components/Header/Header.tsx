import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScreenName } from "../../../../common/enums/ScreenName";
import { styles } from "./styles";

export interface IHeaderProps {
    onClose: () => void;
}

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
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