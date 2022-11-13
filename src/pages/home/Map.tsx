import './css/map.css';
import { FormInterFace } from './FormInterFace';

export function Map() {
    return (
            <section className="flex map-box container-lg">
                <div  className="flex map__box-left">
                    <FormInterFace/>
                </div>
                <div className="flex map__box-right"/>   
            </section>
    )
}