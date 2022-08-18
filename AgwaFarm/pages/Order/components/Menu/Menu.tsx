import { View, Image, Modal, SectionList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IPlantCatagory } from '../../../../common/models/Plant';
import { addPlant } from '../../../../common/store/features/plantCartSlice';
import { selectCategorizedPlants } from '../../../../common/store/features/plantInfoSlice';
import { styles } from "./styles";

export interface IMenu {
    isOpen: boolean;
    onClose: () => void;
}

export const Menu: React.FC<IMenu> = (props: IMenu) => {

    const dispatch = useDispatch();
    const categorizedPlants: IPlantCatagory[] = useSelector(selectCategorizedPlants);

    return (
        <>
            {
                props.isOpen && (
                    <View style={styles.overlap} />
                )
            }
            <Modal
                animationType='slide'
                transparent={true}
                visible={props.isOpen}
                onRequestClose={props.onClose}
            >
                <View style={styles.container}>
                    <TouchableOpacity onPress={props.onClose} style={styles.closeIconWrapper}>
                        <Image
                            style={styles.closeIcon}
                            source={require('../../../../assets/icons/x-sign.svg')}
                        />
                    </TouchableOpacity>
                    <SectionList
                        sections={categorizedPlants.map((category: IPlantCatagory) => ({ title: category.name, data: category.plants }))}
                        renderItem={({ item }) => <Text onPress={() => dispatch(addPlant(item))}>{item.name}</Text>}
                        renderSectionHeader={({ section: { title }}) => <Text>{title}</Text>}
                    />
                </View>
            </Modal>
        </>
    )
}