import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {CookiesService} from "@/app/services/cookies/cookies.service";
import Link from "next/link";

export default function Login() {
    const cookieService = new CookiesService();

    if (cookieService.isCookieExist('apiKey')) {
        redirect('/news');
    }
    async function onSubmit(formData: FormData) {
        'use server'
        const apiKey = formData.get('apiKey') as string;

        cookies().set('apiKey', apiKey);
        redirect('/news');
    }

    return <div className="max-w-xs flex justify-center items-center">
        <form action={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className='mb-4'>
                <h1 className='text-center text-lg font-bold'>To use this service, you have to get api on <Link href='https://newsdata.io/'>NewsData.io</Link></h1>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Your API_KEY</label>
                <input type="text" id="api-key" name="apiKey" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required/>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
    </div>
}