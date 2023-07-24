import { ColorMode } from "native-base"

const lineChart = (colorMode: ColorMode = 'light', maxValue: number = 220) => ({
    startIndex: 0,
    maxValue: maxValue,
    minValue: 0,
    noOfSections: 4,
    initialSpacing: 25,
    thickness: 2,
    dataPointsColor: colorMode == 'light' ? 'blue' : "lime",
    spacing: 80,
    textShiftY: -12,
    textShiftX: -5,
    textFontSize: 10,
    isAnimated: true,
    animationDuration: 200,
    showFractionalValues: true,
    showVerticalLines: true,
    color: colorMode == 'light' ? 'black' : "white",
    textColor: colorMode == 'light' ? 'black' : "white",
    yAxisColor: colorMode == 'light' ? 'black' : "white",
    xAxisColor: colorMode == 'light' ? 'black' : "white",
    rulesColor: colorMode == 'light' ? '#52525b' : "#71717a",
    startFillColor: colorMode == 'light' ? 'black' : "white",
    verticalLinesColor: colorMode == 'light' ? '#52525b' : "#71717a",
    yAxisIndicesColor: colorMode == 'light' ? 'black' : "white",
    xAxisIndicesColor: colorMode == 'light' ? 'black' : "white",
    yAxisTextStyle: {color: colorMode == 'light' ? 'black' : "white"},
    xAxisTextStyle: {color: colorMode == 'light' ? 'black' : "white"},
    xAxisLabelTextStyle: {color: colorMode == 'light' ? 'black' : "white", textAlign: 'center', fontSize: 10}
})

export {
    lineChart
}