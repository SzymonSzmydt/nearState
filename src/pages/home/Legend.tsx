
type LegendProps = {
    rank?: string;
    range?: string | number;
    bgcolor?: string;
}
export function Legend({ rank, range, bgcolor} : LegendProps) {
    return (
            <div className="flex legend"style={{backgroundColor: bgcolor}}>
                <span> { rank } </span>
                <span> { range } </span>
            </div>
    )
}