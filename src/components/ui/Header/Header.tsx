import './css/header.css';
import { NavLink } from "react-router-dom";
export function Header() {
    return (
        <header className="flex header">
            <section className="flex container-lg header__section"> 
                <NavLink to="/" className="link header__logo">
                    near
                    <span>state</span>
                </NavLink>
                <nav className="header__nav">
                    <NavLink to="informations" className="link a"> Informacje </NavLink>
                    <NavLink to="contact" className="link a"> Kontakt </NavLink>
                </nav>
            </section>
        </header>
    )
}