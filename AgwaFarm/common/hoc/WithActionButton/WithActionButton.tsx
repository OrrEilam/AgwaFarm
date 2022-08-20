import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { IconName } from "../../enums/IconName";
import { IWithKey } from "../../interfaces/IWithKey";
import { style } from "./styles";

/**
 * The structure of the parameters needed for the HOC.
 */
export interface IWithActionButtonProps extends IWithKey {
    component: React.ReactNode;
    iconName: IconName;
    onActionPress: () => void;
}

/**
 * An HOC that adds an action button to the top-right corner of a given component.
 * @param props The parameters needed for the HOC (component, icon-name, action-handler...).
 * @returns A new JSX.Element with the added functionallity.
 */
export const WithActionButton = (props: IWithActionButtonProps): JSX.Element => {
    return (
        <TouchableOpacity key={props.key} onPress={props.onActionPress}>
            <>
                {props.component}
                <View style={style.deleteIconWrapper}>
                    <Image
                        source={require(`../../../assets/icons/${props.iconName}.svg`)}
                        style={style.deleteIcon}
                    />
                </View>
            </>
        </TouchableOpacity>
    )
}