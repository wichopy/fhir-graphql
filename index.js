import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema'

const PORT = 3005;

const app = express();

const baseName = process.env.FHIR_GRAPHQL_BASENAME || '';

// bodyParser is needed just for POST.
app.use(baseName + '/graphql', bodyParser.json(), graphqlExpress(req => ({
  schema ,
  context: {
    token: req.headers.authorization
  }
})));

app.get(baseName + '/graphiql', graphiqlExpress({ endpointURL: baseName + '/graphql' })); // if you want GraphiQL enabled

console.log('View your fhir graphql server at http://localhost:' + PORT + (baseName ? '/'+baseName : '') + '/graphiql')
app.listen(PORT);
