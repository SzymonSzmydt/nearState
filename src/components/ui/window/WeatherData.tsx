type WeatherProps = {
    name?: string,
    value?: string | number,
    symbol?: string,
    bgcolor?: string
}

export function WeatherData({name, value, symbol, bgcolor} : WeatherProps) {
    return (
        <section className="flex weather-box" style={{backgroundColor: bgcolor}}>
            <span className="weather_box-a">
                {value ? value : null} 
                <span className="weather_box-b"> { symbol } </span>
            </span>
            <span className="weather_box-b"> {name} </span>
        </section>
    )
}