import { LogListPageComponent } from "@/components/app/logs/log-list-page"
import client from "@/tina/__generated__/client"
import React from "react"

export default async function logListPage() {
  const result = await client.queries.logConnection()
  return <LogListPageComponent {...result} />
}
