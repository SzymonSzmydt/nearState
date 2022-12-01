import "./css/form.css";
import { useState } from "react";
import emailjs from '@emailjs/browser';
const getRandomNumber = () => Math.floor(Math.random() * (20 - 1 + 1) + 1);
const a = getRandomNumber();
const b = getRandomNumber();
export function Form() {
    const [ mathAnswer, setMathAnswer ] = useState('');
    const [form, setForm] = useState({ fullName: "", email: "", message: ""});
    const [error, setError] = useState({ fullName: '', email: '', message: '', signs: 100, success: '', math: ''});
    const sendEmail = () => {
        emailjs
            .send(
                process.env.REACT_APP_emailJSservice,
                process.env.REACT_APP_emailJStemplate,
                form,
                process.env.REACT_APP_emailJSpub
            )
            .then(
                () => {
                    setError({
                        ...error,
                        fullName: "",
                        email: "",
                        message: "",
                        error: "",
                        success: "Success!",
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    const validation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.fullName.length < 4 && form.fullName.match(/[0-9]/gi)) {
            return setError({...error, fullName: 'Niepoprawne imię!'});
        }
        if (form.email.length < 7 && !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(form.email)) {
            return setError({...error, email: 'Niepoprawny email!'});
        }
        if (form.message.length < 8) {
            return setError({...error, message: 'Wiadomość jest zbyt krótka'})
        }
        if (mathAnswer !== (a + b).toString()) {
            return setError({...error, math: 'Źle!'})
        }
        sendEmail();
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
                <div className="flex submit-box wrap">          
                    <section>
                        <span className="math__question"> { `${a} + ${b} = ` }</span>
                        <input  type="text" inputMode="numeric" className="math__question-input"
                            value={mathAnswer}
                            onChange={e => setMathAnswer(e.target.value)}
                        />
                        <div className="error"> { error.math } </div>
                        <div className="success space"> { error.success } </div>
                    </section>      
                    <button className="btn" type="submit" value="Send">Wyślij</button>
                </div>
            </form>
        </section>
    );
}