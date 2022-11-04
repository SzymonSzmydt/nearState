import './css/Home.css';

export function Home() {
    
    return (
        <div className='home'>
            <div className="flex home-box container-lg">
                <div  className="flex home__box-left">
                    <div className='home__box-left-title'>
                        <span>
                            <strong>Znajdź</strong> 
                        </span>
                        <span> restaurację </span><br/>
                        <span>w pobliżu...</span>
                    </div>
                </div>
                <div className="flex home__box-right">
                </div>
            </div>
            
        </div>
    )
}