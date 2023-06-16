import {ApolloClient, InMemoryCache} from '@apollo/client'


const createApolloClient=(endpoint:string)=>{
  return new ApolloClient({
  uri: `http://localhost:5000/graphql/${endpoint}`,
  cache: new InMemoryCache(),
})
}

export default createApolloClient