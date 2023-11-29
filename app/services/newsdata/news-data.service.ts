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
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    }
}