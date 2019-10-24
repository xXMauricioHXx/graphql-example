import express from "express";
import graphqlHTTP from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import { UserResolver } from './resolvers/user';
import { loadModels } from './utils';
import path from 'path';

const models = loadModels();
let typeDefs = '';
models.forEach(model => {
  typeDefs += importSchema(path.resolve(__dirname, `models/${model}`));  
})


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
