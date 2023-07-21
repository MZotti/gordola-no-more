import Card from 'components/Card'
import { Text, useColorMode, View } from 'native-base'
import React from 'react'
import { LineChart } from 'react-native-gifted-charts'
import ChartBox from 'views/ChartsList/charts/ChartBox'
import DataMissing from 'views/ChartsList/charts/DataMissing'
import { lineChart } from '../../../theme/charts'

const buildData = (values: any) => {
    if (!values) return [];
    const data: any[] = [];

    values.filter((val: any) => val.chest !== 0).map((val: any) => data.push({
        label: `${val.chest}`,
        value: val.chest,
        dataPointText: `${val.chest}`
    }))

    return data
}

const ChestChart = ({ values }: any) => {
	const { colorMode } = useColorMode();

    return (
        <Card>
            <Text fontSize="lg">Peito (cm)</Text>
            {
                values.length == 0 ?
                    <DataMissing />
                    :
                    <ChartBox>
                        <LineChart
                            data={buildData(values)}
                            {...lineChart(colorMode)}
                        />
                    </ChartBox>
            }
        </Card>
    )
}

export default ChestChart