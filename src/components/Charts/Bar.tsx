import { ResponsiveBar } from '@nivo/bar'

interface Result {
  o3?: number;
  pm10?: number;
  pm25?: number;
  day?: string;
}

interface Data {
  readonly day?: string;
  readonly avg?: number;
}

function MakeAGoodObject(x: Data[], y:Data[], z:Data[]): any[] {
  return x.map((e, i) => ({o3: e['avg'], pm10: y[i]['avg'], pm25: z[i]['avg'], day: e['day'] }));
}


export function Bar({ o3, pm10, pm25 }: any) {
  const data = MakeAGoodObject(o3, pm10, pm25);

    return (
        <ResponsiveBar
            data={data}
            keys={["o3", "pm10", "pm25"]}
            indexBy="day"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.5}
            innerPadding={3}
            groupMode="grouped"
            valueScale={{ type: "linear" }}
            colors={["rgba(153, 211, 245, 1)", "rgb(238, 195, 134)", "rgb(245, 159, 156)"]}
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
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
        />
    );
}