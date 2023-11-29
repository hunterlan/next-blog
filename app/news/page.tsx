import {News} from "@/app/models/news.interface";
import {redirect} from "next/navigation";
import {NewsDataService} from "@/app/services/newsdata/news-data.service";
import Link from "next/link";
import {CookiesService} from "@/app/services/cookies/cookies.service";

function GetDescription(description: string) {
    if (description.length > 500) {
        return description.substring(0, 500) + '...';
    } else {
        return description;
    }
}

export default async function News({searchParams}: {searchParams?: {
    q?: string;
    page?: string;
    };
}) {
    const query = searchParams?.q || '';
    const page = searchParams?.page || '';
    const cookieService = new CookiesService();
    let apiKeyCookie;

    if (!cookieService.isCookieExist('apiKey')) {
        redirect('/login');
    } else {
        apiKeyCookie = cookieService.getCookie('apiKey');
    }

    const newsDataService = new NewsDataService();
    let news: News;

    news = await newsDataService.fetchNews(apiKeyCookie!.value, query, page);

    return news.results.map((article, index) => {
        return <div key={index} className="m-2 rounded overflow-hidden shadow-lg max-h-fit">
            <Link href={article.link}>
                <img className="w-full" src={article.image_url} alt='news image'/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{article.title}</div>
                    <div>
                        <p className="text-gray-700 text-base">{article.description != null && GetDescription(article.description)}</p>
                    </div>
                </div>
                <div className="flex px-6 py-4">
                    <div>{article.pubDate}</div>
                    <div>{article.creator != null && article.creator.join(', ')}</div>
                </div>
            </Link>
            </div>

    });

}