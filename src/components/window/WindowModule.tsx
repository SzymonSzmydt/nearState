type WindowProps = {
    children: React.ReactNode;
    bgcolor?: string;
}

export function WindowModule(props: WindowProps) {
    return (
        <div className="flex window_module" style={{backgroundColor: props.bgcolor}}>
            { props.children }
        </div>
    )
}