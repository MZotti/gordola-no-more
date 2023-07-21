import { Flex, Text } from 'native-base'

const DataMissing = () => {
    return (
        <Flex w="full" h="100px" justifyContent="center" alignItems="center">
            <Text fontSize="md" >Não existem dados para serem exibidos.</Text>
        </Flex>
    )
}

export default DataMissing