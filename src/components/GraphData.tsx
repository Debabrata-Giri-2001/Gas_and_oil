import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const GraphData = () => {

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View style={styles.containerGraph}>
            <Text style={styles.temp}>Temperature🌡️</Text>
            <LineChart
                data={{
                    labels: ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fry", "Satur"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="°C"
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#04afbbeb",
                    backgroundGradientFrom: "#469da3eb",
                    backgroundGradientTo: "#69bcc2eb",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#09a9d2"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    marginLeft: 4,
                    marginRight: 12
                }}
            />
        </View>
    )
}

export default GraphData

const styles = StyleSheet.create({
    containerGraph: {

    },
    temp: {
        color: '#241500',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 4,
        paddingHorizontal: 12
    }
})