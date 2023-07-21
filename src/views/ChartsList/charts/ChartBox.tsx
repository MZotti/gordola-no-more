import { useColorModeValue, View } from 'native-base'
import React from 'react'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const ChartBox = ({ children }: Props) => {
    return (
        <View
            color="white"
            style={{
                marginLeft: 10,
                backgroundColor: 'transparent',
                paddingBottom: 12,
            }}>
            {children}
        </View>
    )
}

export default ChartBox