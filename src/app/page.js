import client from "../../tina/__generated__/client";
import BlockPageClient from "../components/pages/BlockPageClient";

export default async function Home() {
  // Fetch the data from TinaCMS for the homepage
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  return (
    <BlockPageClient data={data} query={query} variables={variables} />
  );
}
