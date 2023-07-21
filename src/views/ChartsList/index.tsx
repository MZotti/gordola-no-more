import { LineChart } from "react-native-gifted-charts"
import Card from 'components/Card'
import Container from 'components/Container'
import { Box, Button, Flex, ScrollView, Text, View, VStack } from 'native-base'
import { useSelector } from 'react-redux'
import { State } from 'state/reducers'
import { useState } from "react"

import WeightChart from "views/ChartsList/charts/WeightChart"
import IMCChart from "views/ChartsList/charts/IMCChart"
import BicepsChart from "views/ChartsList/charts/BicepsChart"
import ChestChart from "views/ChartsList/charts/ChestChart"
import AbdomenChart from "views/ChartsList/charts/AbdomenChart"
import LegChart from "views/ChartsList/charts/LegChart"
import CalfChart from "views/ChartsList/charts/CalfChart"

const ChartsList = () => {
    const [filter, setFilter] = useState(1)
    const measurements = useSelector(({ measurements }: State) => measurements)

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
                    <WeightChart values={measurements} />
                    <IMCChart values={measurements} />
                    <BicepsChart values={measurements} />
                    <ChestChart values={measurements} />
                    <AbdomenChart values={measurements} />
                    <LegChart values={measurements} />
                    <CalfChart values={measurements} />
                </VStack>
            </ScrollView>
        </Container>
    )
}

export default ChartsList
