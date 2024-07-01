"use client"
import { LogQuery } from "@/tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import {
  CaptionedImage,
  PullQuote,
  TextBox,
  VideoPlayer,
} from "@/components/RichText"

export function LogPageComponent(props: {
  data: LogQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)

  const title = data.log.title
  const content = data.log.body

  return (
    <article>
      <h1 data-tina-field={tinaField(data.log, "title")}>{title}</h1>
      <section data-tina-field={tinaField(data.log, "body")}>
        <TinaMarkdown
          components={{ TextBox, PullQuote, VideoPlayer, CaptionedImage }}
          content={content}
        />
      </section>
    </article>
  )
}
