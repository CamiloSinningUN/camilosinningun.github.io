import axios from 'axios';
import { Repository } from '@interfaces/Repository.interface';

async function getRepositories(username: string): Promise<Repository[]> {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repositories = response.data.map((repo: any) => {
            return {
                name: repo.name,
                description: repo.description,
                url: repo.svn_url,
                languages_url: repo.languages_url,
                languages: []
            }
        });

        await Promise.all(repositories.map(async (repo: Repository) => {
            if (!repo.languages_url) return;
            try {
                const response = await axios.get(repo.languages_url);
                repo.languages = Object.keys(response
                    .data)
                    .map((language: string) => language);
            } catch (error) {
                console.error(`Error fetching languages for repository ${repo.name}:`, error);
            }
        }));

        repositories.forEach((repo: Repository) => {
            delete repo.languages_url;
        });

        return repositories;
    } catch (error) {
        console.error(`Error fetching repositories for user ${username}:`, error);
        return [];
    }
}

export default getRepositories;