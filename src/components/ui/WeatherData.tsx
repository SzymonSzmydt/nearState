type WeatherProps = {
    name?: string,
    value?: string | number,
    symbol?: string,
    bgcolor?: string,
    fSize?: string;
}

export function WeatherData({name, value, symbol, bgcolor, fSize} : WeatherProps) {
    return (
        <section className="flex weather-box" style={{backgroundColor: bgcolor}}>
            <span className="weather_box-a" style={{fontSize: fSize}}>
                {value ? value : null} 
                <span className="weather_box-b"> { symbol } </span>
            </span>
            <span className="weather_box-b"> {name} </span>
        </section>
    )
}