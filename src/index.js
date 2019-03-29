const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));

// Yorum eklendi değişiklik yapılacak mı acaba bakalım.

// Yeni bir brancha a mı eklenecek bu yazdıklarım

// 3 değişiklik yapıldı

// 4 üncü değişiklikte masteramı gidecek.

// Branch merge edildikten sonra bakalım  değişiklikler nereye gidecek.
