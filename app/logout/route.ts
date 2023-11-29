import {CookiesService} from "@/app/services/cookies/cookies.service";
import {redirect} from "next/navigation";

export async function GET(request: Request) {
    const cookieService = new CookiesService();


    if (cookieService.isCookieExist('apiKey')) {
        cookieService.delete('apiKey');
    }

    redirect('/login');
}