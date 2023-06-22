import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit';

const PaiChart = () => {
    const data = [
        {
            name: "Oil",
            population: 21500000,
            color: "#01747cec",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Gas",
            population: 2800000,
            color: "#0295a0eb",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Petroleum",
            population: 527612,
            color: "#01b0bdeb",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Diesel",
            population: 8538000,
            color: "#0bc1ceeb",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "CNG",
            population: 11920000,
            color: "#7fbdc1eb",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

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

        <View>
            <Text style={styles.title}>Production ScoreBard /Month</Text>
            <PieChart
                data={data}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"5"}
                center={[20, 10]}
                absolute
            />
        </View>

    )
}

export default PaiChart

const styles = StyleSheet.create({
    title: {
        color: '#241500',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 4,
        paddingHorizontal: 12
    }
})