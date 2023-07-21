import Card from 'components/Card'
import dateFormat from 'functions/dateFormat'
import { Text, useColorMode } from 'native-base'
import React from 'react'
import { LineChart } from 'react-native-gifted-charts'
import ChartBox from 'views/ChartsList/charts/ChartBox'
import DataMissing from 'views/ChartsList/charts/DataMissing'
import { lineChart } from '../../../theme/charts'

const buildData = (values: any) => {
    if (!values) return [];
    const data: any[] = [];

    values.filter((val: any) => val.weight !== 0).map((val: any) => data.push({
        label: dateFormat(val.created_at, 'dd/MM'),
        value: val.weight,
        dataPointText: `${val.weight}`
    }))

    return data
}

const WeightChart = ({ values }: any) => {
	const { colorMode } = useColorMode();

    return (
        <Card>
            <Text fontSize="lg">Peso (kg)</Text>
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

export default WeightChart