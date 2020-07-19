import bodyParser from 'body-parser'
import express from 'express';
/* import { graphqlHTTP } from 'express-graphql' */
import { ApolloServer } from 'apollo-server-express'

import { connect } from './db'
import { resolvers, typeDefs } from './schema'

const app = express();
const port = 3000;


/* const root = { */
/*   hellow: () => { */
/*     return 'Graphql root?!' */
/*   } */
/* } */

/* app.use('/graphql', graphqlHTTP({ */
/*   schema: schema, */
/*   rootValue: root, */
/*   graphiql: true */
/* })) */

/* app.use('/graphql, bodyParser.json(), graphqlExpress({ */
/*   schema: schema */
/* })) */

;(async function setupDb() {
  await connect()
})()

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
