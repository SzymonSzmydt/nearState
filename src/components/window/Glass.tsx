type GlassProps = {
    children: React.ReactNode
}
export function Glass(props: GlassProps) {
    return (
        <section className="glass">
            { props.children }
        </section>
    )
}