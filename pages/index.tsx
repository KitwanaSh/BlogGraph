import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";

const graphcsm = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clvi6da9n0h4y07wcwlgw9hvf/master"
);

const QUERY = gql`
  {
    posts {
      id,
      title,
      slug,
      date_published,
      content {
        html
      }
      author {
        name,
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home Page</h1>
    </div>
  )
}
