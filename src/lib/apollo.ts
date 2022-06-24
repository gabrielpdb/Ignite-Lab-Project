import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qaucx43lsg01xtfr6xgb5a/master',
  cache: new InMemoryCache()
})
