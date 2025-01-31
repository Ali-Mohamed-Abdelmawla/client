// src/apollo-client.js
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  // uri: 'http://localhost/ecommerce/public/index.php', // Replace with your actual GraphQL endpoint
  uri: "https://amused-robust-sailfish.ngrok-free.app/ecommerce/public/index.php",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
