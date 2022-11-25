

export function Form() {
    return (
        <section className="form__box">
            <form className="flex form">
                <label>Imię i Nazwisko</label>  
                <input type="text"/>
                <label>Email</label>  
                <input type="email"/>           
                <label>Wiadomość (min. 160 znaków)</label>
                <textarea name="message" rows={4} cols={50}/>
                <button>Wyślij</button>
            </form>
        </section>
    )
}