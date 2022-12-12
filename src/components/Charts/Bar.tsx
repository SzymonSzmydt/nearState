import { ResponsiveBar } from "@nivo/bar";
import { Avarge, Daily } from '../../contex/types/Aqicn';
import { useCallback } from 'react'
type BarProps = {
  O3: number;
  pm10: number;
  pm25: number;
  day: string;
}
export function Bar({ o3, pm10, pm25 }: Daily) {
    const MakeAGoodObject = useCallback((): BarProps[] => {
        return o3.map((e, i) => ({
          O3: e["avg"],
          pm10: pm10[i]["avg"],
          pm25: pm25[i]["avg"],
          day: e["day"]?.slice(5,10),
        }));
      }, [o3, pm10, pm25]);
  return (
    <div className="bar">
      <ResponsiveBar
        data={MakeAGoodObject()}
        keys={["O3", "pm10", "pm25"]}
        indexBy="day"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.5}
        innerPadding={3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        colors={[
          "rgba(153, 211, 245, 1)",
          "rgb(238, 195, 134)",
          "rgb(245, 159, 156)",
        ]}
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "wartość",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
