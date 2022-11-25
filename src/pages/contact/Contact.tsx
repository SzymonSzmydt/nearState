import { Information } from './Information';
import { WindowModule } from '../../components/window/WindowModule';

export function Contact() {
    return (
        <div className="flex wrap contact">
            <WindowModule>
                <Information/>
            </WindowModule>
            
        </div>
    )
}