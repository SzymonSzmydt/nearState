import './css/style.css'
import { ResponsivePie } from "@nivo/pie";
interface PieProps {
  co?: number;
  no2?: number;
  o3?: number;
  so2?: number;
}
interface PieReturn {
  id: string;
  value: number;
}
const makeAgoodPie =(co?:number, no2?:number, o3?:number, so2?:number):PieReturn[] => {
  const names = ['CO', 'NO2', 'O3', 'SO2'];
  return [co, no2, o3, so2].map((e, i) => typeof e === 'number' ? ({id: names[i], value: e}) : ({id: "X", value: 0}))
    .filter(e => e.id !== "X");
};
export function Pie( { co, no2, o3, so2 }: PieProps) {
  return (
    <div className="pie">
      <ResponsivePie
        data={makeAgoodPie(co, no2, o3, so2)}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 60,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}