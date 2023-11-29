'use client'

import {useDebouncedCallback} from "use-debounce";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams!);

        params.delete('page');
        params.set('language', 'en')

        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative flex flex-1 flex-shrink-0 justify-center">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-3/4 rounded-md border border-gray-200 py-[9px] justify-center pl-[1rem] text-sm outline-2 text-black"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams!.get('query')?.toString()}
            />
        </div>
    );
}