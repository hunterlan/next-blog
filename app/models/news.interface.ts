import {Article} from "@/app/models/article.interface";

export interface News {
    results: Article[];
    nextPage: string;
}