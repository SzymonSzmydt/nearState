import './css/header.css';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
export function Header() {
    const [ border, setBorder ] = useState({poland: true, europe: false, informations: false, contact: false });
    const handleBorderChange = (name:string) => {
        setBorder(
            { 
                poland: false,
                europe: false, 
                informations: false, 
                contact: false,
                [name]: true
            });
    }
    return (
        <header className="flex header">
            <section className="flex container-lg header__section"> 
                <NavLink to="/" className="link header__logo">
                    near
                    <span>state</span>
                </NavLink>
                <nav className="header__nav">
                    <NavLink to="/" className='link a' onClick={()=>handleBorderChange('poland')}>
                        <span className={`${border.poland ? 'header__nav-border': "" }`}> Polska </span> 
                    </NavLink>
                    <NavLink to="europe" className="link a" onClick={()=>handleBorderChange('europe')}> 
                        <span className={`${border.europe ? 'header__nav-border': "" }`}> Europa </span> 
                    </NavLink>
                    <NavLink to="informations" className="link a" onClick={()=>handleBorderChange('informations')}> 
                        <span className={`${border.informations ? 'header__nav-border': "" }`}> Informacje </span> 
                    </NavLink>
                    <NavLink to="contact" className="link a" onClick={()=>handleBorderChange('contact')}>
                        <span className={`${border.contact ? 'header__nav-border': "" }`}> Kontakt </span>  
                    </NavLink>
                </nav>
            </section>
        </header>
    )
}