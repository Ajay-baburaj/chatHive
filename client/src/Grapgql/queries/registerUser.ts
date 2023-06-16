import {gql} from '@apollo/client'

const REGISTER_USER = gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      id
      username
      password
      email
      mobile
    }
  }
`;
export default REGISTER_USER