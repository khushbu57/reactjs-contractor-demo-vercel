import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://reactjs-contractor-demo-vercel.vercel.app/api/graphql',
  cache: new InMemoryCache(),
})

export default client
