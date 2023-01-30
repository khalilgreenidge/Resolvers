const resolvers = {
    Query: {
        // returns an array of tracks used to populate homepage
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;