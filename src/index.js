import express from "express"
import bodyParser from "body-parser"
import { graphqlExpress, graphiqlExpress } from "apollo-server-express"
import schema from "./schema"

const PORT = 3005

const app = express()

const baseName = process.env.FHIR_GRAPHQL_BASENAME || ""

// bodyParser is needed just for POST.
app.use(baseName + "/graphql", bodyParser.json(), graphqlExpress({ schema }))
app.get(baseName + "/graphiql", graphiqlExpress({ endpointURL: baseName + "/graphql" })) // if you want GraphiQL enabled

// eslint-disable-next-line no-console
console.log("listening on port ", PORT)
app.listen(PORT)
