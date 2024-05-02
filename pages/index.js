import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";

const graphcsm = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clvi6da9n0h4y07wcwlgw9hvf/master"
);

const QUERY = gql`
  {
    posts {
      id,
      title,
      slug,
      datePublished,
      content {
        html,
      }
      author {
        name,
      }
      coverPhoto {
        url,
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcsm.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function IndexPage({posts}) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home Page</h1>
      <div>
        {posts.map((post) => (
          <BlogCard title={post.title}
          author={post.author}
          coverPhoto={post.coverPhoto} 
          key={post.id} datePublished={post.datePublished} 
          slug={post.slug} />
        ))}
      </div>
    </div>
  )
}
