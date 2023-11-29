export default function NewsLayout({children,}: {
    children: React.ReactNode
}) {
    return <section className="grid sm:grid-cols-1 md:grid-cols-2">{children}</section>
}