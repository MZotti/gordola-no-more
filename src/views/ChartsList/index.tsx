import Container from 'components/Container'
import { Button, Flex, ScrollView, Text, VStack } from 'native-base'
import { useSelector } from 'react-redux'
import { State } from 'state/reducers'
import { useState } from "react"

import LineChart from 'views/ChartsList/charts/LineChart'
import { filterByDate } from 'functions/filterMeasurements'

const ChartsList = () => {
    const [filter, setFilter] = useState(30)
    const measurements = useSelector(({ measurements }: State) => measurements)
    const filteredMeasurements = filterByDate(measurements, filter)

    return (
        <Container>
            <Flex w="full" justifyContent="space-between" flexDirection="row" mb={4}>
                <Button colorScheme="lightBlue" onPress={() => setFilter(30)} variant={filter == 30 ? 'solid' : 'outline'}><Text>30 Dias</Text></Button>
                <Button colorScheme="lightBlue" onPress={() => setFilter(90)} variant={filter == 90 ? 'solid' : 'outline'}><Text>6 Meses</Text></Button>
                <Button colorScheme="lightBlue" onPress={() => setFilter(365)} variant={filter == 365 ? 'solid' : 'outline'}><Text>1 Ano</Text></Button>
                <Button colorScheme="lightBlue" onPress={() => setFilter(0)} variant={filter == 0 ? 'solid' : 'outline'}><Text>Todos</Text></Button>
            </Flex>
            <ScrollView w="full">
                <VStack space={4} pb={12}>
                    <LineChart label="Peso (kg)" values={filteredMeasurements} segment="weight" />
                    <LineChart label="IMC (kg/m²)" values={filteredMeasurements} segment="imc" />
                    <LineChart label="Bíceps (cm)" values={filteredMeasurements} segment="biceps" isMultiple />
                    <LineChart label="Peito (cm)" values={filteredMeasurements} segment="chest" />
                    <LineChart label="Abdomen (cm)" values={filteredMeasurements} segment="abdomen" />
                    <LineChart label="Pernas (cm)" values={filteredMeasurements} segment="legs" isMultiple />
                    <LineChart label="Panturrilhas (cm)" values={filteredMeasurements} segment="calves" isMultiple />
                </VStack>
            </ScrollView>
        </Container>
    )
}

export default ChartsList
