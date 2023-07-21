import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HStack, IconButton, StatusBar, useColorMode, useColorModeValue } from 'native-base';
import { ChartLine, GearSix, ListDashes, Plus } from 'phosphor-react-native';

import MeasurementsList from 'views/MeasurementsList';
import ChartsList from 'views/ChartsList';
import Configurations from 'views/Configurations';
import { measurementsCreators, registerCreators } from './state';
import { useEffect } from 'react';
import { getMeasurements } from 'functions/storage';

const Tab = createBottomTabNavigator();

export default function Navigator() {
	const dispatch = useDispatch()
	const { openCloseRegister } = bindActionCreators(registerCreators, dispatch)
	const { listMeasurements } = bindActionCreators(measurementsCreators, dispatch)
	const { colorMode } = useColorMode();


	const menuStyle = {
		headerStyle: {
			backgroundColor: colorMode == 'light' ? '#f5f5f4' : '#1e293b',
		},
		tabBarStyle: {
			backgroundColor: colorMode == 'light' ? '#f5f5f4' : '#1e293b',
		},
		headerTintColor: colorMode == 'light' ? '#71717a' : '#f1f5f9',
		headerRight: () => (
			<HStack pr="4" space={4}>
				<IconButton
					variant="outline"
					colorScheme="gray"
					onPress={() => openCloseRegister({ isOpen: true })}>
					<Plus size={20} color={useColorModeValue("#000", "#FAFAFA")} />
				</IconButton>
			</HStack>
		)
	};

	useEffect(() => {
		const loadMeasurements = async () => {
			const measurements = await getMeasurements()
			console.log('>>', measurements)
			if (measurements && measurements.length > 0) listMeasurements(measurements)
		}
		loadMeasurements()
	}, [])

	return (
		<>
			<StatusBar
				backgroundColor={colorMode == 'light' ? '#f5f5f4' : '#1e293b'}
			/>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName='Medidas'
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let icon;
							const iconColor =
								colorMode == 'light' ? '#1e293b' : '#f5f5f4';

							if (route.name === 'Medidas') {
								icon = focused ? (
									<ListDashes
										size={24}
										color={'#38bdf8'}
										weight="duotone"
									/>
								) : (
									<ListDashes
										size={24}
										color={iconColor}
										weight="duotone"
									/>
								);
							} else if (route.name === 'Gráficos') {
								icon = focused ? (
									<ChartLine
										size={24}
										color={'#38bdf8'}
										weight="duotone"
									/>
								) : (
									<ChartLine
										size={24}
										color={iconColor}
										weight="duotone"
									/>
								);
							} else if (route.name === 'Configurações') {
								icon = focused ? (
									<GearSix
										size={24}
										color={'#38bdf8'}
										weight="duotone"
									/>
								) : (
									<GearSix
										size={24}
										color={iconColor}
										weight="duotone"
									/>
								);
							}

							return icon;
						},
						tabBarActiveTintColor: '#38bdf8',
						tabBarInactiveTintColor:
							colorMode == 'light' ? '#1e293b' : '#f5f5f4',
					})}
				>
					<Tab.Screen
						options={{
							title: 'Medidas',
							...menuStyle,
						}}
						name="Medidas"
						component={MeasurementsList}
					/>
					<Tab.Screen
						options={{
							title: 'Gráficos',
							...menuStyle,
						}}
						name="Gráficos"
						component={ChartsList}
					/>
					<Tab.Screen
						options={{
							title: 'Configurações',
							...menuStyle,
						}}
						name="Configurações"
						component={Configurations}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}