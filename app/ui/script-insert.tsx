'use client'

import Script from "next/script";

export default function ScriptInsert({page} : {page: string}) {
    const urlToInsert = window.location.origin + '/news?language=en&page=' + page;
    const contentScript = 'document.getElementById("next-page-link").href = "' + urlToInsert + '"';
    return (
        <Script id='insert-next-page-link'>
            {contentScript}
        </Script>
    )
}