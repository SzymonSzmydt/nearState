import { WindowModule } from '../../../components/window/WindowModule';
import { SearchBar } from './SearchBar';


export function Dashpanel() {
    return (
        <WindowModule>
            <div>
                <h3>Sprawdź zanieczyszczenie w innych miastach Polski </h3><br/>
                <SearchBar/>
            </div>
        </WindowModule>
    )
}