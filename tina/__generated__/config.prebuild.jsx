// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "dummy-client-id",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "dummy-token",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "global",
        label: "Global Settings",
        path: "content/global",
        format: "json",
        ui: {
          global: true
        },
        fields: [
          {
            type: "string",
            name: "primaryColor",
            label: "Primary Brand Color (Hex)",
            description: "e.g., #2563eb"
          },
          {
            type: "string",
            name: "secondaryColor",
            label: "Secondary Brand Color (Hex)",
            description: "e.g., #1e40af"
          },
          {
            type: "string",
            name: "accentColor",
            label: "Accent Color (Hex)",
            description: "e.g., #f59e0b"
          }
        ]
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
            required: true
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
                  { type: "string", name: "secondaryButtonLink", label: "Secondary Button Link" }
                ]
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
                      { type: "string", name: "label", label: "Label" }
                    ]
                  }
                ]
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
                      { type: "string", name: "iconName", label: "Icon Name (from Lucide React, e.g., TrendingUp)" }
                    ]
                  }
                ]
              },
              {
                name: "richText",
                label: "Rich Text",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "rich-text", name: "body", label: "Body" }
                ]
              },
              {
                name: "faq",
                label: "FAQ Section",
                fields: [
                  { type: "string", name: "title", label: "Section Title" },
                  {
                    type: "object",
                    list: true,
                    name: "questions",
                    label: "Questions",
                    fields: [
                      { type: "string", name: "question", label: "Question" },
                      { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } }
                    ]
                  }
                ]
              },
              {
                name: "process",
                label: "Process Steps",
                fields: [
                  { type: "string", name: "title", label: "Section Title" },
                  { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                  {
                    type: "object",
                    list: true,
                    name: "steps",
                    label: "Steps",
                    fields: [
                      { type: "string", name: "title", label: "Step Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                    ]
                  }
                ]
              },
              {
                name: "servicesGrid",
                label: "Services Grid",
                fields: [
                  { type: "string", name: "title", label: "Section Title" },
                  {
                    type: "object",
                    list: true,
                    name: "services",
                    label: "Services",
                    fields: [
                      { type: "string", name: "title", label: "Service Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "iconName", label: "Icon (e.g., Target, Search, BarChart)" },
                      {
                        type: "string",
                        list: true,
                        name: "tags",
                        label: "Ideal For (Tags)"
                      }
                    ]
                  }
                ]
              },
              {
                name: "resourcesList",
                label: "Resources List",
                fields: [
                  { type: "string", name: "title", label: "Section Title" },
                  { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                  {
                    type: "object",
                    list: true,
                    name: "resources",
                    label: "Links",
                    fields: [
                      { type: "string", name: "label", label: "Link Label" },
                      { type: "string", name: "url", label: "URL" }
                    ]
                  }
                ]
              },
              {
                name: "categories",
                label: "Categories Section",
                fields: [
                  { type: "string", name: "title", label: "Section Title" },
                  { type: "string", name: "linkText", label: "Link Text" },
                  { type: "string", name: "linkUrl", label: "Link URL" },
                  {
                    type: "object",
                    list: true,
                    name: "items",
                    label: "Category Items",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "iconName", label: "Icon (e.g., Rocket, TrendingUp, Briefcase, ShieldCheck, MoreHorizontal)" }
                    ]
                  }
                ]
              },
              {
                name: "cta",
                label: "CTA Capsule",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "buttonLink", label: "Button Link" }
                ]
              }
            ]
          }
        ]
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
            required: true
          },
          {
            type: "string",
            name: "snippet",
            label: "Snippet",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "tag",
            label: "Category Tag"
          },
          {
            type: "string",
            name: "author",
            label: "Author"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
