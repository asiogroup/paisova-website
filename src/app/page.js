import client from "../../tina/__generated__/client";
import HomePageClient from "../components/pages/HomePageClient";

export default async function Home() {
  // Fetch the data from TinaCMS for the homepage
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  return (
    <HomePageClient data={data} query={query} variables={variables} />
  );
}
