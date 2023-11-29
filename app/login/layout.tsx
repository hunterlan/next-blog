//h-screen w-screen flex justify-center align-middle
import Link from "next/link";

export default function LoginLayout({children,}: {
    children: React.ReactNode
}) {
    return <section className="h-screen w-screen flex justify-center align-middle">{children}</section>
}