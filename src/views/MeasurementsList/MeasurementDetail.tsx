import dateFormat from 'functions/dateFormat'
import { imcValue } from 'functions/measurements'
import { Measurements } from 'interfaces'
import { Actionsheet, Badge, Box, HStack, Text, useDisclose, VStack } from 'native-base'
import { useState } from 'react'
import { Pressable } from 'react-native'
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from 'state/reducers';
import { editMeasurementsCreators, measurementsCreators, registerCreators } from '../../state';
import DeleteMeasument from 'views/MeasurementsList/DeleteMeasument'
import { useDispatch } from 'react-redux'

interface Props {
    measurement: Measurements
}

const MeasurementDetail = ({ measurement }: Props) => {
    const dispatch = useDispatch()
    const { openCloseRegister } = bindActionCreators(registerCreators, dispatch)
    const { setMeasurements } = bindActionCreators(editMeasurementsCreators, dispatch)
    const { label, color } = imcValue(measurement.imc)
    const [isOpen, setIsOpen] = useState(false);
    const { isOpen: modalOpen, onClose, onOpen } = useDisclose()

    const onEdit = () => {
        setMeasurements(measurement)
        openCloseRegister({ isOpen: true })
    }

    return (
        <Pressable onLongPress={() => setIsOpen(true)} delayLongPress={200}>
            <Text fontSize="lg" fontWeight="bold">{dateFormat(measurement.created_at, "dd/MM/yyyy HH:mm:ss")}</Text>
            <VStack space={4}>
                <HStack w="full" space={4} alignItems="center">
                    <VStack>
                        <Text fontSize="lg">Peso: {measurement.weight}kg</Text>
                        <Text fontSize="lg">IMC: {measurement.imc}kg/m²</Text>
                    </VStack>
                    {measurement.imc !== 0 && <Badge height="8" colorScheme={color}>{label}</Badge>}
                </HStack>
                <HStack w="full" justifyContent="space-between" space={4}>
                    <VStack>
                        <Text fontSize="lg">Bíceps</Text>
                        <Text fontSize="lg">Esq.: {measurement.biceps.left}cm</Text>
                        <Text fontSize="lg">Dir.: {measurement.biceps.right}cm</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="lg">Pernas</Text>
                        <Text fontSize="lg">Esq.: {measurement.legs.left}cm</Text>
                        <Text fontSize="lg">Dir.: {measurement.legs.right}cm</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="lg">Panturrilhas</Text>
                        <Text fontSize="lg">Esq.: {measurement.calves.left}cm</Text>
                        <Text fontSize="lg">Dir.: {measurement.calves.right}cm</Text>
                    </VStack>
                </HStack>
                <HStack w="full" justifyContent="space-between" space={4}>
                    <VStack>
                        <Text fontSize="lg">Peito</Text>
                        <Text fontSize="lg">{measurement.chest}cm</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="lg">Abdomen</Text>
                        <Text fontSize="lg">{measurement.abdomen}cm</Text>
                    </VStack>
                </HStack>
            </VStack>
            <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Actionsheet.Content>
                    <Actionsheet.Item onPress={() => { setIsOpen(false); onEdit(); }}>Editar</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => { setIsOpen(false); onOpen(); }}>Remover</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
            <DeleteMeasument id={measurement.id} isOpen={modalOpen} onClose={onClose} />
        </Pressable>
    )
}

export default MeasurementDetail
