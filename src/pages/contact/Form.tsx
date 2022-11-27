import "./css/form.css";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { emailJSserviceID, emailJStemplateID, emailJSpubKey } from '../../contex/env';

export function Form() {
    const [form, setForm] = useState({ fullName: "", email: "", message: "" });
    const [error, setError] = useState({ fullName: false, email: false, message: false});

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          emailjs.send(emailJSserviceID, emailJStemplateID, form, emailJSpubKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const validation = () => {
        if (form.fullName.length < 3 && form.fullName.match(/[0-9]/gi)) {
            return setError(state => state.message = 'Nieporawne imię!');
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setForm({
            ...form, 
            [e.target?.name] : e.target?.value
        })
    }
    console.log(form);
    
    return (
        <section className="form__box">
            <form className="flex form" onSubmit={sendEmail}>
                <label>Imię i Nazwisko <span className="error"> {error } </span></label>
                <input
                    type="text"
                    className="input"
                    name="fullName"
                    value={form.fullName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                />
                <label>Email <span className="error"> {error } </span></label>
                <input
                    type="email"
                    name="email"
                    className="input"
                    value={form.email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                />
                <label>Wiadomość (min. 160 znaków) <span className="error"> {error } </span></label>
                <textarea
                    rows={5}
                    cols={20}
                    minLength={2}
                    maxLength={50}
                    value={form.message}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setForm({...form, message: event.target.value})}
                />
                <button className="btn" type="submit" value="Send">Wyślij</button>
            </form>
        </section>
    );
}
