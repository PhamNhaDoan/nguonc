class NguonCProvider extends DefaultProvider {
    constructor() {
        super({
            name: "Nguồn C Phim",
            baseUrl: "https://phim.nguonc.com/api",
            lang: "vi",
            type: ProviderType.Movie
        });
    }

    async getHome() {
        const res = await this.request(`${this.baseUrl}/films/phim-moi-cap-nhat?page=1`);
        const json = JSON.parse(res);
        return json.items.map(item => ({
            name: item.name,
            url: `${this.baseUrl}/film/${item.slug}`,
            poster: item.thumb_url
        }));
    }

    async search(query) {
        const res = await this.request(`${this.baseUrl}/films/search?keyword=${encodeURIComponent(query)}`);
        const json = JSON.parse(res);
        return json.items.map(item => ({
            name: item.name,
            url: `${this.baseUrl}/film/${item.slug}`,
            poster: item.thumb_url
        }));
    }

    async loadDetail(url) {
        const res = await this.request(url);
        const json = JSON.parse(res);
        const movie = json.movie;

        const episodes = json.episodes.flatMap(server => 
            server.items.map(ep => ({
                name: `Tập ${ep.name}`,
                url: ep.embed,
                description: movie.description
            }))
        );

        return {
            name: movie.name,
            poster: movie.thumb_url,
            description: movie.description,
            episodes: episodes
        };
    }
}

registerProvider(new NguonCProvider());
        name: movie.name,
        poster: movie.thumb_url,
        description: movie.description,
        episodes: episodes
    };
}

module.exports = { getHome, search, loadDetail };
