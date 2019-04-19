import { Article } from './Article';

export function filterByTerms(article: Article, terms: string[]): boolean {
    for (const term of terms) {
        const lowerTerm = term.toLowerCase();
        if (article.title.toLowerCase().indexOf(lowerTerm) !== -1 ||
            article.content.toLowerCase().indexOf(lowerTerm) !== -1 ||
            article.author.toLowerCase().indexOf(lowerTerm) !== -1) {
            return true;
        }
    }
    return false;
}
