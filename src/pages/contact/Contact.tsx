import './css/form.css'
import { Information } from './Information';
import { WindowModule } from '../../components/window/WindowModule';
import { Form } from './Form';

export function Contact() {
    return (
        <div className="flex wrap contact">
            <WindowModule>
                <Information/>
                <Form/>
            </WindowModule>
        </div>
    )
}