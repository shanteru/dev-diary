import { defineConfig } from "tinacms"
import { richTextComponents } from "./richtext-schema"

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
            templates:richTextComponents
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => {
            if (document._sys.filename === "homepage") {
              return "/"
            }
            return undefined
          },
          filename: {
            slugify: (values) => {
              return `${(values.title || "").toLowerCase().replace(/ /g, "-")}`.replace(
                /[^\w\.\/-\s]/gi,
                "",
              )
            },
          },
        },
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "tags",
            type: "string",
            label: "Tags",
            list: true,
          },
          {
            name: "date",
            type: "datetime",
            label: "Date",
            required: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
            templates:richTextComponents
          },
        ],
        defaultItem: () => {
          return {
            title: "New Post",
            date: new Date(),
          }
        },
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => {
            return `posts/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${(values.title || "").toLowerCase().replace(/ /g, "-")}`.replace(
                /[^\w\.\/-\s]/gi,
                "",
              )
            },
          },
        },
      },
      {
        name: "log",
        label: "Logs",
        path: "content/logs",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "description",
            type: "string",
            label: "Description",
            required: true,
          },
          {
            name: "link",
            type: "string",
            label: "Link",
            required: true,
          },
          {
            name: "date",
            type: "datetime",
            label: "Date",
            required: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
            templates:richTextComponents
          },
        ],
        ui: {
          router: ({ document }) => {
            return `logs/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${(values.title || "").toLowerCase().replace(/ /g, "-")}`.replace(
                /[^\w\.\/-\s]/gi,
                "",
              )
            },
          },
        },
      },
    ],
  },
})
