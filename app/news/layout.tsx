import Link from "next/link";
import Search from "@/app/ui/search";

export default function NewsLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header className='bg-white dark:bg-gray-700'>
                <nav className="mx-auto flex justify-between p-6 lg:px-8 items-center" aria-label="Global">
                    <p className='font-bold'>Powered by <Link href='https://newsdata.io/'>NewsData.io</Link></p>
                    <Search></Search>
                    <a href='' className='flex justify-center pr-3' id='next-page-link'>Next page</a>
                    <Link href={'/logout'}><button>Logout</button></Link>
                </nav>
            </header>
            <section className="grid sm:grid-cols-1 md:grid-cols-2 p-4 lg:px-6">{children}</section>
        </>
    )
}