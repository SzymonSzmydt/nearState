import './css/contact.css'
export function DirectContact() {
    return (
        <section className="flex direct">
            <div className="direct__wrapper">
                <h3> Zapraszam do kontaktu</h3>
                <div className="flex direct__wrapper-box">
                    <div className="symbol phone phone-filter" />
                    <a href="tel:663 617 707">Zadzwoń</a>
                </div>
                <div className="flex direct__wrapper-box">
                    <div className="symbol mail phone-filter" />
                    <a href="mailto:szymonszmydt@gmail.com">Napisz e-mail</a>
                </div>
                <div className="flex direct__wrapper-box">
                    <div className="symbol linkedin phone-filter" />
                    <a
                        href="https://www.linkedin.com/in/szymon-szmydt-5b0992230/"
                        target="_blank"
                        rel="noreferrer">
                        Znajdź mnie na LinkedIn
                    </a>
                </div>
                <div className="flex direct__wrapper-box">
                    <p>
                        <strong> 
                            Zachęcam do skorzystania z formularza
                        </strong>
                    </p>
                </div>
            </div>
        </section>
    );
}