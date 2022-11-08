import './css/map.css';

export function Map() {
    return (
            <section className="flex map-box container-lg">
                <div  className="flex map__box-left">
                    <div className='map__box-left-title'>
                        <span>
                            <strong>Znajdź</strong> 
                        </span>
                        <span> restaurację </span><br/>
                        <span>w pobliżu...</span>
                    </div>
                </div>
                <div className="flex map__box-right"/>   
            </section>
    )
}