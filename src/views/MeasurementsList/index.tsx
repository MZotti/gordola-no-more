import Card from 'components/Card'
import Container from 'components/Container'
import { Flex, ScrollView, Text, VStack } from 'native-base'
import { useSelector } from 'react-redux'
import { State } from 'state/reducers'
import MeasurementDetail from 'views/MeasurementsList/MeasurementDetail'

const MeasurementsList = () => {
    const measurements = useSelector(({ measurements }: State) => measurements)
    
    return (
        <Container>
            <ScrollView w="full">
                <VStack space={4}>
                    {
                        measurements.length === 0 ?
                            <Card>
                                <Flex w="full" h="100px" justifyContent="center" alignItems="center">
                                    <Text fontSize="md">Não existem dados para serem exibidos.</Text>
                                </Flex>
                            </Card>
                            :
                            measurements?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(mst => (
                                <Card key={`${mst.created_at}`}>
                                    <MeasurementDetail measurement={mst} />
                                </Card>
                            ))
                    }
                </VStack>
            </ScrollView>
        </Container>
    )
}

export default MeasurementsList
