import { Flex, HStack, Switch, Text, useColorMode } from 'native-base';

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Flex
			w="100%"
			direction="row"
			justifyContent="space-between"
			alignItems="center"
		>
			<Text fontSize="md">Tema</Text>
			<HStack space={2} alignItems="center">
				<Text fontSize="md">Escuro</Text>
				<Switch
					isChecked={colorMode === 'light'}
					onToggle={toggleColorMode}
					onTrackColor={'orange.500'}
					offTrackColor={'purple.500'}
				/>
				<Text fontSize="md">Claro</Text>
			</HStack>
		</Flex>
	);
};

export default ColorModeSwitch;
