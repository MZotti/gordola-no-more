import dateFormat from 'functions/dateFormat'
import { imcValue } from 'functions/measurements'
import { Measurements } from 'interfaces'
import { Badge, Box, HStack, Text, VStack } from 'native-base'
import { Pressable } from 'react-native'

interface Props {
    measurement: Measurements
}

const MeasurementDetail = ({ measurement }: Props) => {
    const { label, color } = imcValue(measurement.imc)

    return (
        <Pressable onLongPress={() => console.log('oii')}>
            <Text fontSize="lg" fontWeight="bold">{dateFormat(measurement.created_at, "dd/MM/yyyy HH:mm:ss")}</Text>
            <VStack space={4}>
                <HStack w="full" space={4} alignItems="center">
                    <VStack>
                        <Text fontSize="lg">Peso: {measurement.weight}kg</Text>
                        <Text fontSize="lg">IMC: {measurement.imc}kg/m²</Text>
                    </VStack>
                    <Badge height="8" colorScheme={color}>{label}</Badge>
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
        </Pressable>
    )
}

export default MeasurementDetail
