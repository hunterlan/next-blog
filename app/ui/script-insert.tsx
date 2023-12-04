'use client'

import Script from "next/script";
import {usePathname} from "next/navigation";

export default function ScriptInsert({page} : {page: string}) {
    const pathname = usePathname()
    const hostname = pathname!.split('/')[0];
    const urlToInsert = hostname + '/news?language=en&page=' + page;
    const contentScript = 'document.getElementById("next-page-link").href = "' + urlToInsert + '"';
    return (
        <Script id='insert-next-page-link'>
            {contentScript}
        </Script>
    )
}