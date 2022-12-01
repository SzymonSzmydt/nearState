import './css/window.css';
type WindowProps = {
    children: React.ReactNode
}
export function Window(props: WindowProps) {
    return (
        <div className="window">
            { props.children }
        </div>
    )
}