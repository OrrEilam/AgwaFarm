import React from 'react';
import { SectionListData } from 'react-native';
import { WithStyledWrapper } from '../../../../../common/hoc/WithStyledWrapper/WithStyledWrapper';
import { IBasePlant } from '../../../../../common/models/Plant';
import { MenuSectionItems } from '../MenuSectionItems/MenuSectionItems';
import { MenuSectionTitle } from '../MenuSectionTitle/MenuSectionTitle';
import { styles } from './styles';

/**
 * A type that correspods to a section's data in the view.
 */
type SectionData = SectionListData<IBasePlant, {
    title: string;
    data: IBasePlant[];
}>;

/**
 * The structure of the parameters needed for the component.
 */
export interface IMenuSectionProps {
    section: SectionData;
    onAddPlant: (plant: IBasePlant) => void;
}

/**
 * A component that views a section in the menu.
 * @param props The parameters needed for the component (data, events...).
 * @returns The component's JSX render.
 */
export const MenuSection: React.FC<IMenuSectionProps> = (props: IMenuSectionProps) => {
    return WithStyledWrapper({
        styles: styles.wrapper,
        component: (
            <>
                <MenuSectionTitle title={props.section.title} />
                <MenuSectionItems plants={props.section.data} onAddPlant={props.onAddPlant} />
            </>
        )
    })
}