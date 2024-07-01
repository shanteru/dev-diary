import { LogPageComponent } from "@/components/app/logs/log-page"
import client from "@/tina/__generated__/client"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries
    .log({ relativePath: `${params.slug}.mdx` })
    .then((result) => {
      return result
    })
    .catch((err) => {
      console.error(err)
      return notFound()
    })

  return <LogPageComponent {...result} />
}
