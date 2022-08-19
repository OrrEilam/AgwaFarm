import { Text } from 'react-native';
import { styles } from './styles';

/**
 * The structure of the parameters needed for the component.
 */
export interface IMenuSectionHeaderProps {
    title: string;
}

/**
 * A component that views a basic plant-item with it's name & icon.
 * @param props The parameters needed for the component (plant-info, events...).
 * @returns The component's JSX render.
 */
export const MenuSectionHeader: React.FC<IMenuSectionHeaderProps> = (props: IMenuSectionHeaderProps) => {
    return (
        <Text style={styles.sectionHeader}>
            {props.title}
        </Text>
    )
}