import { View } from "react-native"

/**
 * The structure of the parameters needed for the HOC.
 */
export interface IWithStyledWrapperProps {
    component: React.ReactNode;
    styles: any;
}

/**
 * An HOC that adds a styled-wrapper component.
 * @param props The parameters needed for the HOC (component, styles...).
 * @returns A new JSX.Element with the added functionallity.
 */
export const WithStyledWrapper = (props: IWithStyledWrapperProps): JSX.Element => {
    return (
        <View style={props.styles}>
            {props.component}
        </View>
    )
}