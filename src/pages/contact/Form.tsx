import "./css/form.css";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { emailJSserviceID, emailJStemplateID, emailJSpubKey } from '../../contex/env';

export function Form() {
    const [form, setForm] = useState({ fullName: "", email: "", message: "" });
    const [error, setError] = useState({ fullName: '', email: '', message: '', signs: 100, success: ""});

    const sendEmail = () => {
          emailjs.send(emailJSserviceID, emailJStemplateID, form, emailJSpubKey)
            .then(() => {
                setError({...error, success: 'Success!'})
            }, (error) => {
                console.log(error.text);
            });
    };

    const validation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.fullName.length < 4 && form.fullName.match(/[0-9]/gi)) {
            return setError({...error, fullName: 'Niepoprawne imię!'});
        }
        if (form.email.length < 7 && !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(form.email)) {
            console.log(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email))
            return setError({...error, email: 'Niepoprawny email!'});
        }
        if (form.message.length < 8) {
            return setError({...error, message: 'Wiadomość jest zbyt krótka'})
        }
        else sendEmail();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setForm({
            ...form, 
            [e.target?.name] : e.target.value
        });
    }

    const textareaTextLengthCheckOut = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({...form, message: e.target.value});
        const textLength = e.target.value.length < 100 ? 100 - e.target.value.length : 0;
        setError({...error, signs: textLength})
    }
    console.log(form);
    
    return (
        <section className="form__box">
            <form className="flex form" onSubmit={validation}>
                <label>Imię i Nazwisko <span className="error"> &nbsp; { error.fullName } </span></label>
                <input
                    type="text"
                    className="input"
                    name="fullName"
                    value={form.fullName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                />
                <label>Email <span className="error">&nbsp; { error.email } </span></label>
                <input
                    type="email"
                    name="email"
                    className="input"
                    value={form.email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                />
                <label>Wiadomość (max. { error.signs } znaków) <span className="error">&nbsp; { error.message } </span></label>
                <textarea
                    rows={5}
                    cols={20}
                    maxLength={100}
                    value={form.message}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => textareaTextLengthCheckOut(event)}
                />
                <button className="btn" type="submit" value="Send">Wyślij</button>
                <span className="success"> { error.success } </span>
            </form>
        </section>
    );
}
