import {cookies} from "next/headers";
export class CookiesService {
    private cookieStore = cookies();

    create(name: string, value: string) {
        this.cookieStore.set(name, value);
    }

    getCookie(name: string) {
        const cookie = this.cookieStore.get(name);
        if (cookie == null) {
            throw Error('Cookie with given name is not exist');
        }

        return cookie;
    }

    isCookieExist(name: string) {
        return this.cookieStore.get(name) !== undefined;
    }

    delete(name: string) {
        return this.cookieStore.delete(name);
    }
}