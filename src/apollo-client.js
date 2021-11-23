import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: "https://save-the-seas.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret":
            "Zv8NrUSMN7eqqw0CGSm49dtOw0Qz8e08RR9IFrgoKtx46ZUpEFSTULggV5TSvNKu",
    },
});

const wsLink = new WebSocketLink({
    uri: "wss://save-the-seas.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret":
                    "Zv8NrUSMN7eqqw0CGSm49dtOw0Qz8e08RR9IFrgoKtx46ZUpEFSTULggV5TSvNKu",
            },
        },
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;
