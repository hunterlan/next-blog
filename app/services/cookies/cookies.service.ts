import {cookies} from "next/headers";
export class CookiesService {
    private cookieStore = cookies();

    create(name: string, value: string) {
        this.cookieStore.set(name, value);
    }

    get(name: string) {
        const cookie = this.cookieStore.get(name);
        if (cookie == null) {
            throw Error('Cookie with given name is not exist');
        }

        return cookie;
    }

    getValue(name: string) {
        const cookie = this.cookieStore.get(name);
        if (cookie == null) {
            throw Error('Cookie with given name is not exist');
        }

        return cookie.value;
    }

    isCookieExist(name: string) {
        return this.cookieStore.get(name) != null;
    }

    delete(name: string) {
        return this.cookieStore.delete(name);
    }
}