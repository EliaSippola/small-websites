import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts";

export default function WeatherChart() {

    const [series, setSeries] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./weather.json")
            .then((res) => {
                if (!res.ok) {
                    setData([]);
                } else {
                    return res.json();
                }
            })
            .then((json) => {
                const temps = json.locations.map((dt) => {
                    return dt.temperature;
                });
                const names = json.locations.map((dt) => {
                    return dt.name;
                });
                setSeries([{ data: temps}])
                setData(names)
            })
            .catch((err) => {
                console.log(err);
                setSeries([{data: undefined}]);
            })
    }, []);

    return (
        <>
            <BarChart 
                height={300}
                width={800}
                grid={{ horizontal: true }}
                series={series}
                margin={{
                    top: 10,
                    bottom: 20
                }}
                yAxis={[
                    {
                        colorMap:
                        {
                            type: 'piecewise',
                            thresholds: [0],
                            colors: ['blue', 'red'],
                        },
                        min: -20,
                        max: 20
                    }
                ]}
                xAxis={[
                    {
                        scaleType: 'band',
                        data: data
                    }
                ]}
            />
        </>
    )

}