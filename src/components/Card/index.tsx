import { Box, useColorModeValue } from 'native-base'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Card = ({children}: Props) => {
	const backgroundColor = useColorModeValue('light.100', 'blueGray.700')
	return (
		<Box
			backgroundColor={backgroundColor}
			p={2}
			w="100%"
			borderRadius={4}
		>
			{children}
		</Box>
	)
}

export default Card
