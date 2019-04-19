import { Article } from './Article';

export function filterByTerm(article: Article, term: string): boolean {
    const lowerTerm = term.toLowerCase();
    return article.title.toLowerCase().indexOf(lowerTerm) !== -1 ||
        article.content.toLowerCase().indexOf(lowerTerm) !== -1 ||
        article.author.toLowerCase().indexOf(lowerTerm) !== -1;
}