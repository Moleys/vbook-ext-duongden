load('config.js');
function execute() {
    return Response.success([
        { title: "Action", input: "/genre/action", script: "gen.js" },
        { title: "Adult", input: "/genre/adult", script: "gen.js" },
        { title: "Adventure", input: "/genre/adventure", script: "gen.js" },
        { title: "Anime", input: "/genre/anime", script: "gen.js" },
        { title: "Arts", input: "/genre/arts", script: "gen.js" },
        { title: "Comedy", input: "/genre/comedy", script: "gen.js" },
        { title: "Drama", input: "/genre/drama", script: "gen.js" },
        { title: "Eastern", input: "/genre/eastern", script: "gen.js" },
        { title: "Ecchi", input: "/genre/ecchi", script: "gen.js" },
        { title: "Fan-fiction", input: "/genre/fan-fiction", script: "gen.js" },
        { title: "Fantasy", input: "/genre/fantasy", script: "gen.js" },
        { title: "Game", input: "/genre/game", script: "gen.js" },
        { title: "Gender bender", input: "/genre/gender-bender", script: "gen.js" },
        { title: "Harem", input: "/genre/harem", script: "gen.js" },
        { title: "Historical", input: "/genre/historical", script: "gen.js" },
        { title: "Horror", input: "/genre/horror", script: "gen.js" },
        { title: "Isekai", input: "/genre/isekai", script: "gen.js" },
        { title: "Josei", input: "/genre/josei", script: "gen.js" },
        { title: "Lgbt+", input: "/genre/lgbt+", script: "gen.js" },
        { title: "Magic", input: "/genre/magic", script: "gen.js" },
        { title: "Magical realism", input: "/genre/magical-realism", script: "gen.js" },
        { title: "Manhua", input: "/genre/manhua", script: "gen.js" },
        { title: "Martial arts", input: "/genre/martial-arts", script: "gen.js" },
        { title: "Mature", input: "/genre/mature", script: "gen.js" },
        { title: "Mecha", input: "/genre/mecha", script: "gen.js" },
        { title: "Military", input: "/genre/military", script: "gen.js" },
        { title: "Modern life", input: "/genre/modern-life", script: "gen.js" },
        { title: "Movies", input: "/genre/movies", script: "gen.js" },
        { title: "Mystery", input: "/genre/mystery", script: "gen.js" },
        { title: "Psychological", input: "/genre/psychological", script: "gen.js" },
        { title: "Realistic fiction", input: "/genre/realistic-fiction", script: "gen.js" },
        { title: "Reincarnation", input: "/genre/reincarnation", script: "gen.js" },
        { title: "Romance", input: "/genre/romance", script: "gen.js" },
        { title: "School life", input: "/genre/school-life", script: "gen.js" },
        { title: "Sci-fi", input: "/genre/sci-fi", script: "gen.js" },
        { title: "Science fiction", input: "/genre/science-fiction", script: "gen.js" },
        { title: "Seinen", input: "/genre/seinen", script: "gen.js" },
        { title: "Shoujo", input: "/genre/shoujo", script: "gen.js" },
        { title: "Shoujo ai", input: "/genre/shoujo-ai", script: "gen.js" },
        { title: "Shounen", input: "/genre/shounen", script: "gen.js" },
        { title: "Shounen ai", input: "/genre/shounen-ai", script: "gen.js" },
        { title: "Slice of life", input: "/genre/slice-of-life", script: "gen.js" },
        { title: "Smut", input: "/genre/smut", script: "gen.js" },
        { title: "Sports", input: "/genre/sports", script: "gen.js" },
        { title: "Supernatural", input: "/genre/supernatural", script: "gen.js" },
        { title: "Tragedy", input: "/genre/tragedy", script: "gen.js" },
        { title: "Urban life", input: "/genre/urban-life", script: "gen.js" },
        { title: "Video games", input: "/genre/video-games", script: "gen.js" },
        { title: "War", input: "/genre/war", script: "gen.js" },
        { title: "Wuxia", input: "/genre/wuxia", script: "gen.js" },
        { title: "Xianxia", input: "/genre/xianxia", script: "gen.js" },
        { title: "Xuanhuan", input: "/genre/xuanhuan", script: "gen.js" },
        { title: "Yaoi", input: "/genre/yaoi", script: "gen.js" },
        { title: "Yuri", input: "/genre/yuri", script: "gen.js" },
        // Add more objects following the same structure
    ]);
}