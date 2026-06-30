import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "dummy-client-id", // Get this from tina.io
  token: process.env.TINA_TOKEN || "dummy-token", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "global",
        label: "Global Settings",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "primaryColor",
            label: "Primary Brand Color (Hex)",
            description: "e.g., #2563eb",
          },
          {
            type: "string",
            name: "secondaryColor",
            label: "Secondary Brand Color (Hex)",
            description: "e.g., #1e40af",
          },
          {
            type: "string",
            name: "accentColor",
            label: "Accent Color (Hex)",
            description: "e.g., #f59e0b",
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            templates: [
              {
                name: "hero",
                label: "Hero Section",
                fields: [
                  { type: "string", name: "headline", label: "Headline" },
                  { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
                  { type: "string", name: "primaryButtonText", label: "Primary Button Text" },
                  { type: "string", name: "primaryButtonLink", label: "Primary Button Link" },
                  { type: "string", name: "secondaryButtonText", label: "Secondary Button Text" },
                  { type: "string", name: "secondaryButtonLink", label: "Secondary Button Link" },
                ],
              },
              {
                name: "stats",
                label: "Stats Section",
                fields: [
                  {
                    type: "object",
                    list: true,
                    name: "statItems",
                    label: "Stat Items",
                    fields: [
                      { type: "string", name: "value", label: "Value" },
                      { type: "string", name: "label", label: "Label" },
                    ],
                  },
                ],
              },
              {
                name: "features",
                label: "Features Section",
                fields: [
                  {
                    type: "object",
                    list: true,
                    name: "featureItems",
                    label: "Features",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "iconName", label: "Icon Name (from Lucide React, e.g., TrendingUp)" },
                    ],
                  },
                ],
              },
              {
                name: "richText",
                label: "Rich Text",
                fields: [
                  { type: "rich-text", name: "body", label: "Body" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
