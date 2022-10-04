import { ApolloServer, gql } from 'apollo-server-micro'
import micro_cors from "micro-cors"
import { resolvers } from 'apollo/resolvers'
import { typeDefs } from 'apollo/type-defs'
const cors = micro_cors({
  origin:"https://studio.apollographql.com", 
  allowMethods:["GET","POST"], 
  allowHeaders:["Access-Control-Allow-Credentials","true","Content-Type","Access-Control-Allow-Origin","Access-Control-Allow-Headers"]
})

/* const typeDefs = gql`
  type Query {
    users: [User!]!
    user(username: String): User
  }
  type User {
    name: String
    username: String
  }
`
const users = [
  { name: 'Leeroy Jenkins', username: 'leeroy' },
  { name: 'Foo Bar', username: 'foobar' },
]

const resolvers = {
  Query: {
    users() {
      return users
    },
    user(parent, { username }) {
      return users.find((user) => user.username === username)
    },
  },
}

 */



const apolloServer = new ApolloServer({typeDefs, resolvers})
const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if(req.method == 'OPTIONS') {
    res.end()
    return false
  }
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}