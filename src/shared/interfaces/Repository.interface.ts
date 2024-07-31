export interface Repository {
    id: number;
    name: string;
    description: string;
    url: string;
    languages_url?: string;
    languages: string[];
}