type WindowProps = {
    children: React.ReactNode
}

export function WindowModule(props: WindowProps) {
    return (
        <div className="flex window_module">
            { props.children }
        </div>
    )
}