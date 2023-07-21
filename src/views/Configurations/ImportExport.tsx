import { Button, Flex, HStack, IconButton, Switch, Text, useColorMode } from 'native-base';
import { Download, Upload } from 'phosphor-react-native';

const ImportExport = () => {
	return (
		<Flex
			w="100%"
			direction="row"
			justifyContent="space-between"
			alignItems="center"
		>
			<Text fontSize="md">Dados</Text>
			<HStack space={4} alignItems="center">
				<Button variant="solid" colorScheme="green" title='Salvar' >
					<HStack space={2}>
						<Download size={20} color="#FFF" />
						<Text>Salvar</Text>
					</HStack>
				</Button>
				<Button variant="solid" colorScheme="blue" title='Salvar' >
					<HStack space={2}>
						<Upload size={20} color="#FFF" />
						<Text>Carregar</Text>
					</HStack>
				</Button>
			</HStack>
		</Flex>
	);
};

export default ImportExport;
