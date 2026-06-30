import client from "../../../tina/__generated__/client";
import BlockPageClient from "../../components/pages/BlockPageClient";

export default async function Services() {
  // Fetch the data from TinaCMS for the services page
  const { data, query, variables } = await client.queries.page({
    relativePath: "services.mdx",
  });

  return (
    <BlockPageClient data={data} query={query} variables={variables} />
  );
}
