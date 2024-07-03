import { Template, tinaTableTemplate } from "tinacms"

export const richTextComponents: Template[] = [
  tinaTableTemplate,
  {
    name: "VideoPlayer",
    label: "VideoPlayer",
    fields: [
      {
        name: "url",
        label: "Video URL",
        type: "string",
      },
    ],
    ui: {
      defaultItem: {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    },
  },
  {
    name: "CaptionedImage",
    label: "Label Image",
    fields: [
      {
        name: "imgUrl",
        label: "Image URL",
        type: "image",
      },
      {
        name: "caption",
        label: "Caption",
        type: "string",
      },
      {
        name: "alt",
        label: "Image alt text",
        type: "string",
      },
      {
        name: "imgWidth",
        label: "Image Width",
        type: "number",
      },
      {
        name: "imgHeight",
        label: "Image Height",
        type: "number",
      },
    ],
  },
  {
    name: "TextBox",
    label: "Text Box",
    fields: [
      {
        name: "text",
        label: "Text",
        type: "rich-text",
      },
    ],
  },
  {
    name: "PullQuote",
    label: "Pull Quote",
    ui:{
        defaultItem:{
            text:"It is what it is",
            author: "Life",
        }

    },
    fields:[
        {
            name: "text",
            label: "Text",
            type: "string",
        },
        {
            name:"author",
            label:"Author",
            description: "Optional",
            type: "string"
        },
        {
            name:"authorLink",
            label:"Author Link",
            description: "Optional",
            type: "string"
        }
    ]
  }

]
