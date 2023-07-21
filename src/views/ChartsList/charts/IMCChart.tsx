import Card from 'components/Card'
import dateFormat from 'functions/dateFormat'
import { Text, useColorMode, View } from 'native-base'
import React from 'react'
import { LineChart } from 'react-native-gifted-charts'
import { lineChart } from 'theme/charts'
import ChartBox from 'views/ChartsList/charts/ChartBox'
import DataMissing from 'views/ChartsList/charts/DataMissing'

const buildData = (values: any) => {
    if (!values) return [];
    const data: any[] = [];

    values.filter((val: any) => val.imc !== 0).map((val: any) => data.push({
        label: dateFormat(val.created_at, 'dd/MM'),
        value: val.imc,
        dataPointText: `${val.imc}`
    }))

    return data
}

const IMCChart = ({ values }: any) => {
	const { colorMode } = useColorMode();

    return (
        <Card>
            <Text fontSize="lg">IMC (kg/m²)</Text>
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

export default IMCChart