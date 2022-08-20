import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

/**
 * The structure of the parameters needed for the component.
 */
interface ICTAButtonBaseProps {
    onPress: () => void;
    text?: string;
    disabled?: boolean;
}

/**
 * An extention of the props with children added to it for generics.
 */
export type CTAButtonProps = React.PropsWithChildren<ICTAButtonBaseProps>;

/**
 * A component that views a CTA (call-to-action) button with the given children/text.
 * @param props The parameters needed for the component (indicators, events...).
 * @returns The component's JSX render.
 */
export const CTAButton: React.FC<CTAButtonProps> = (props: CTAButtonProps) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.onPress}
            style={
                props.disabled
                ? {...styles.ctaButtonContainer, ...styles.ctaButtonDisabled}
                : styles.ctaButtonContainer
            }
        >
            {
                props.text && (
                    <Text style={styles.ctaButtonText}>
                        {props.text}
                    </Text>
                )
            }
            {props.children}
        </TouchableOpacity>
    )
}