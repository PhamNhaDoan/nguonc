function getHome() {
    var res = request("https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=1");
    var json = JSON.parse(res);
    return json.items.map(function(item) {
        return {
            name: item.name,
            url: "https://phim.nguonc.com/api/film/" + item.slug,
            poster: item.thumb_url
        };
    });
}

function search(query) {
    var res = request("https://phim.nguonc.com/api/films/search?keyword=" + encodeURIComponent(query));
    var json = JSON.parse(res);
    return json.items.map(function(item) {
        return {
            name: item.name,
            url: "https://phim.nguonc.com/api/film/" + item.slug,
            poster: item.thumb_url
        };
    });
}
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
