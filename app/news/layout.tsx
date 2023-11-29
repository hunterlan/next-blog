import Link from "next/link";
import Search from "@/app/ui/search";

export default function NewsLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header className='bg-white'>
                <nav className="mx-auto flex justify-between p-6 lg:px-8" aria-label="Global">
                    <p className='font-bold'>Powered by <Link href='https://newsdata.io/'>NewsData.io</Link></p>
                    <Search></Search>
                    <Link href={'/logout'}><button>Logout</button></Link>
                </nav>
            </header>
            <section className="grid sm:grid-cols-1 md:grid-cols-2 p-4 lg:px-6">{children}</section>
        </>
    )
}