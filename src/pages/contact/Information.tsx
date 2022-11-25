import './css/contact.css'


export function Information() {
    return (
        <>
            <section className="contact">
                <h3> Zapraszam do kontaktu </h3>
                <div className="flex contact__box">
                    <div className="symbol phone phone-filter"/> 
                    <a href="tel:663 617 707">Zadzwoń</a>
                </div>
                <div className="flex contact__box">
                    <div className="symbol mail phone-filter"/> 
                    <a href="mailto:szymonszmydt@gmail.com">Napisz e-mail</a>
                </div>
                <div className="flex contact__box"> 
                    <div className="symbol linkedin phone-filter"/>
                    <a href="https://www.linkedin.com/in/szymon-szmydt-5b0992230/" 
                        target="_blank" 
                        rel="noreferrer">
                        Znajdź mnie na LinkedIn
                    </a>
                </div>
                <div className="flex contact__box"> 
                    <div className="symbol github"/>
                    <a href="https://github.com/SzymonSzmydt" 
                        target="_blank" 
                        rel="noreferrer">
                         Znajdź mnie na Github
                    </a>
                </div>
            </section>
        </>
    )
}