import Container from 'components/Container'
import { Button, Flex, ScrollView, Text, VStack } from 'native-base'
import { useSelector } from 'react-redux'
import { State } from 'state/reducers'
import { useState } from "react"

import LineChart from 'views/ChartsList/charts/LineChart'

const ChartsList = () => {
    const [filter, setFilter] = useState(1)
    const measurements = useSelector(({ measurements }: State) => measurements).sort((a, b) => new Date(a.created_at) - new Date(b.created_at))

    return (
        <Container>
            <Flex w="full" justifyContent="space-between" flexDirection="row" mb={4}>
                <Button colorScheme="lightBlue" onPress={() => setFilter(1)} variant={filter == 1 ? 'solid' : 'outline'}><Text>30 Dias</Text></Button>
                <Button colorScheme="lightBlue" onPress={() => setFilter(2)} variant={filter == 2 ? 'solid' : 'outline'}><Text>6 Meses</Text></Button>
                <Button colorScheme="lightBlue" onPress={() => setFilter(3)} variant={filter == 3 ? 'solid' : 'outline'}><Text>1 Ano</Text></Button>
                <Button colorScheme="lightBlue" onPress={() => setFilter(4)} variant={filter == 4 ? 'solid' : 'outline'}><Text>Todos</Text></Button>
            </Flex>
            <ScrollView w="full">
                <VStack space={4} pb={12}>
                    <LineChart label="Peso (kg)" values={measurements} segment="weight" />
                    <LineChart label="IMC (kg/m²)" values={measurements} segment="imc" />
                    <LineChart label="Bíceps (cm)" values={measurements} segment="biceps" isMultiple />
                    <LineChart label="Peito (cm)" values={measurements} segment="chest" />
                    <LineChart label="Abdomen (cm)" values={measurements} segment="abdomen" />
                    <LineChart label="Pernas (cm)" values={measurements} segment="legs" isMultiple />
                    <LineChart label="Panturrilhas (cm)" values={measurements} segment="calves" isMultiple />
                </VStack>
            </ScrollView>
        </Container>
    )
}

export default ChartsList
