import express from "express";
import graphqlHTTP from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import { UserResolver } from './resolvers/user';
import path from "path";
const fs = require('fs');
fs.readdir(path.resolve(__dirname, "models"), function (err: any, files: any) {
  console.log(files);
})
const typeDefs = importSchema(path.resolve(__dirname, "models/user.graphql"));

const resolvers = {...new UserResolver().resolvers};

const port = 3000;
const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(port, () => console.log(`Server is running on port ${port}`));
