import Card from 'components/Card'
import dateFormat from 'functions/dateFormat'
import { Text, useColorMode } from 'native-base'
import { LineChart as Chart } from 'react-native-gifted-charts'
import ChartBox from 'views/ChartsList/charts/ChartBox'
import DataMissing from 'views/ChartsList/charts/DataMissing'
import { lineChart } from '../../../theme/charts'

const buildData = (values: any[], segment: string, isMultiple: boolean = false) => {
    if (!values) return [];
    const data: any[] = [];

    const sortedValues = values.sort((a, b) => Number(a.id) > Number(b.id) ? 1 : -1).map(val => val)

    if (!isMultiple) {
        sortedValues.filter((val: any) => val[segment] !== 0).map((val: any) => data.push({
            label: dateFormat(val.created_at, 'dd/MM'),
            value: val[segment],
            dataPointText: `${val[segment]}`
        }))
    } else {
        sortedValues.filter((val: any) => val[segment]['right'] !== 0).map((val: any) => data.push({
            label: dateFormat(val.created_at, 'dd/MM'),
            value: val[segment]['right'],
            dataPointText: `${val[segment]['right']}`
        }))
    }

    return data
}

const maxValue = (values: any, segment: string, isMultiple: boolean = false) => {
    if (!values) return 100;

    let segmentValue = 0;

    if (!isMultiple) {
        segmentValue = values.sort((a: any, b: any) => a[segment] < b[segment] ? 1 : -1)[0][segment]
    } else {
        segmentValue = values.sort((a: any, b: any) => a[segment]['right'] < b[segment]['right'] ? 1 : -1)[0][segment]['right']
    }

    return segmentValue == 0 ? 100 : Math.floor(segmentValue) + 20
}

const LineChart = ({ label, values, segment, isMultiple = false }: any) => {
    const { colorMode } = useColorMode();

    return (
        <Card>
            <Text fontSize="lg">{label}</Text>
            {
                values.length == 0 || buildData(values, segment, isMultiple).length === 0 ?
                    <DataMissing />
                    :
                    <ChartBox>
                        <Chart
                            data={buildData(values, segment, isMultiple)}
                            {...lineChart(colorMode, maxValue(values, segment, isMultiple))}
                        />
                    </ChartBox>
            }
        </Card>
    )
}

export default LineChart