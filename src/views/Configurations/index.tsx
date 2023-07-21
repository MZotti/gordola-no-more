import { VStack } from 'native-base';

import Container from 'components/Container';
import ColorModeSwitch from './ColorModeSwitch';
import ImportExport from 'views/Configurations/ImportExport';

const Configurations = () => {
	return (
		<Container>
			<VStack space={8} w="100%" px={6}>
				<ColorModeSwitch />
				<ImportExport />
			</VStack>
		</Container>
	);
};

export default Configurations;
