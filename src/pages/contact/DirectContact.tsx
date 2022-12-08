import './css/contact.css'
import { NavLink } from 'react-router-dom';
export function DirectContact() {
    return (
        <section className="flex direct">
            <h3> Zapraszam do kontaktu</h3>
            <p>
                Proszę czuć się swobodnie korzystając z formularza kontaktowego. 
                Na każdą wiadomość odpowiem.
            </p><br/>
            <p>
                Z wyrazami szacunku <NavLink to="/">nearState</NavLink>
            </p>
        </section>
    );
}