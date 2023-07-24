import Card from 'components/Card'
import dateFormat from 'functions/dateFormat'
import { Text, useColorMode } from 'native-base'
import React from 'react'
import { LineChart as Chart } from 'react-native-gifted-charts'
import ChartBox from 'views/ChartsList/charts/ChartBox'
import DataMissing from 'views/ChartsList/charts/DataMissing'
import { lineChart } from '../../../theme/charts'

const buildData = (values: any, segment: string, isMultiple: boolean = false) => {
    if (!values) return [];
    const data: any[] = [];

    if (!isMultiple) {
        values.filter((val: any) => val[segment] !== 0).map((val: any) => data.push({
            label: dateFormat(val.created_at, 'dd/MM'),
            value: val[segment],
            dataPointText: `${val[segment]}`
        }))
    } else {
        values.filter((val: any) => val[segment]['right'] !== 0).map((val: any) => data.push({
            label: dateFormat(val.created_at, 'dd/MM'),
            value: val[segment]['right'],
            dataPointText: `${val[segment]['right']}`
        }))
    }

    return data
}

const LineChart = ({ label, values, segment, isMultiple = false }: any) => {
    const { colorMode } = useColorMode();

    return (
        <Card>
            <Text fontSize="lg">{label}</Text>
            {
                values.length == 0 ?
                    <DataMissing />
                    :
                    <ChartBox>
                        <Chart
                            data={buildData(values, segment, isMultiple)}
                            {...lineChart(colorMode, 220)}
                        />
                    </ChartBox>
            }
        </Card>
    )
}

export default LineChart