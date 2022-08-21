import React from "react";
import { Text } from 'react-native';
import { styles } from './styles';

/**
 * The structure of the parameters needed for the component.
 */
export interface IMenuSectionTitleProps {
    title: string;
}

/**
 * A component that views a basic plant-item with it's name & icon.
 * @param props The parameters needed for the component (plant-info, events...).
 * @returns The component's JSX render.
 */
export const MenuSectionTitle: React.FC<IMenuSectionTitleProps> = (props: IMenuSectionTitleProps) => {
    return (
        <Text style={styles.sectionHeader}>
            {props.title}
        </Text>
    )
}