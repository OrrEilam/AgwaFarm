import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { IWithKey } from "../../interfaces/IWithKey";
import { style } from "./styles";

export enum ActionType {
    Add,
    Delete,
}

/**
 * The structure of the parameters needed for the HOC.
 */
export interface IWithActionButtonProps extends IWithKey {
    component: React.ReactNode;
    onActionPress: () => void;
    action: ActionType;
}

/**
 * An HOC that adds an action button to the top-right corner of a given component.
 * @param props The parameters needed for the HOC (component, icon-name, action-handler...).
 * @returns A new JSX.Element with the added functionallity.
 */
export const WithActionButton = (props: IWithActionButtonProps): JSX.Element => {

    const getIcon = (): JSX.Element => {
        switch (props.action) {
            case ActionType.Add:
                return (
                    <Image
                        source={require(`../../../assets/icons/plus-sign.png`)}
                        style={style.actionIcon}
                    />
                );
            case ActionType.Delete:
                return (
                    <Image
                        source={require(`../../../assets/icons/minus-sign.png`)}
                        style={style.actionIcon}
                    />
                );
        }
    }

    return (
        <TouchableOpacity key={props.key} onPress={props.onActionPress}>
            <>
                {props.component}
                <View style={style.actionIconWrapper}>
                    {getIcon()}
                </View>
            </>
        </TouchableOpacity>
    )
}