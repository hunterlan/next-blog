import {ErrorResponse} from "@/app/models/error/error-response.interface";

export class NewsDataService {
    API_URL = 'https://newsdata.io/api/1/news';
    async fetchNews(apiKey: string, query = '', page = '') {
        let finalUrl = this.API_URL + '?language=en';
        if (page !== '') {
            finalUrl += '&page=' + page;
        }
        if (query !== '') {
            finalUrl += '&q=' + query;
        }

        const response = await fetch(finalUrl, {
            method: 'GET',
            next: {revalidate: 600},
            headers: {
                'X-ACCESS-KEY': apiKey,
            }
        });

        if (!response.ok) {
            const errorResponse = await response.json() as ErrorResponse;
            if (errorResponse.results.code === 'Too many requests') {
                throw new Error('You have exceeded the rate limit for your plan. ' +
                    'You will need to wait for the rate limit to reset before making further requests.');
            }
            else if (errorResponse.results.code === 'Unauthorized') {
                throw new Error('You API key is invalid. Log out and insert valid API key.')
            }
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data. Code: ' + errorResponse.results.code +
                '; Message: ' + errorResponse.results.message);
        }

        return await response.json();
    }
}