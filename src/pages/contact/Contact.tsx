import { WindowModule } from '../../components/window/WindowModule';
import { Form } from './Form';
import { DirectContact } from './DirectContact';
export function Contact() {
    return (
        <div className="flex wrap contact">
            <WindowModule>
                <DirectContact/>
                <Form/>
            </WindowModule>
        </div>
    )
}