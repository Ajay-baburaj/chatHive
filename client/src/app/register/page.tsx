'use client'
import createApolloClient from '@/Grapgql/graphql'
import RegisterForm from '@/components/RegisterForm/RegisterForm'
import { ApolloProvider } from '@apollo/client'
import React from 'react'

const page = () => {
  const client = createApolloClient('register')
  return (

    <ApolloProvider client={client}>
      <RegisterForm />
    </ApolloProvider>

  )
}

export default page