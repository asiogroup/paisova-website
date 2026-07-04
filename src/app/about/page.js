import client from "../../../tina/__generated__/client";
import BlockPageClient from "../../components/pages/BlockPageClient";

export const revalidate = 60;

export default async function About() {
  // Fetch the data from TinaCMS for the about page
  const { data, query, variables } = await client.queries.page({
    relativePath: "about.mdx",
  });

  return (
    <BlockPageClient data={data} query={query} variables={variables} />
  );
}
