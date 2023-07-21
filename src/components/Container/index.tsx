import { Box, useColorModeValue } from 'native-base';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Container = ({ children }: Props) => {
    const backgroundColor = useColorModeValue("#e7e5e4", "#64748b");

    return (
        <Box w="100%" flexGrow={1} py={4} px={2} backgroundColor={backgroundColor}>
            {children}
        </Box>
    )
}

export default Container;