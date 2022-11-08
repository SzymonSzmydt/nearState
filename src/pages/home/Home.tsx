import { Window } from './../../components/ui/window/Window';
import { Map } from './Map';
import { FormInterface } from './FormInterface';

export function Home() {
    return (
        <Window>
            <Map/>
            <FormInterface/>
        </Window>
    )
}