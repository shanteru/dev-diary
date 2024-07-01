"use client"

import { LinkCard } from "@/components/LinkCard"
import { LogConnectionQuery } from "@/tina/__generated__/types"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"

export function LogListPageComponent(props: {
  data: LogConnectionQuery
  variables: {}
  query: string
}) {
  const { data } = useTina(props)

  const logList = data.logConnection.edges

  return (
    <>
      <h1>dear diary...</h1>
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {logList
            ?.filter((_: any, i: number) => i % 3 === 0)
            .map((log: any) => (
              <LinkCard
                key={log.node.id}
                link={`/logs/${log.node._sys.filename}`}
                title={log.node.title}
                description={log.node.description}
                date={log.node.date}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {logList
            ?.filter((_: any, i: number) => i % 3 === 1)
            .map((log: any) => (
              <LinkCard
              key={log.node.id}
              link={`/logs/${log.node._sys.filename}`}
              title={log.node.title}
              description={log.node.description}
              date={log.node.date}
            />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {logList
            ?.filter((_: any, i: number) => i % 3 === 2)
            .map((log: any) => (
              <LinkCard
                key={log.node.id}
                link={`/logs/${log.node._sys.filename}`}
                title={log.node.title}
                description={log.node.description}
                date={log.node.date}
              />
            ))}
        </div>
      </div>
    </>
  )
}
