import {gql} from '@apollo/client'

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      gender
      email
      phone
    }
  }
`

export default GET_USER