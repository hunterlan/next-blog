import {FormEvent} from "react";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

export default function Login() {
    const cookieStore = cookies();
    const apiKey = cookieStore.get('apiKey');
    if (apiKey != null) {
        redirect('/news');
    }
    async function onSubmit(formData: FormData) {
        'use server'
        const apiKey = formData.get('apiKey') as string;
        cookies().set('apiKey', apiKey);
        redirect('/news');
    }

    return <div>
        <form action={onSubmit}>
            <label>Your API_KEY</label>
            <input type="text" id="api-key" name="apiKey" required/>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}