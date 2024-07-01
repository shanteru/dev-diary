"use client"

import { PostConnectionQuery } from "@/tina/__generated__/types"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"
import moment from "moment"
import { useMemo } from "react"

export function PostListPageComponent(props: {
  data: PostConnectionQuery
  variables: {}
  query: string
  tag?: string
}) {
  const { data } = useTina(props)

  const postList = useMemo(() => {
    const filteredPosts = props.tag
      ? data.postConnection?.edges?.filter((post: any) => {
          return post.node.tags && post.node.tags.includes(props.tag)
        })
      : data.postConnection.edges

    return filteredPosts?.sort((a: any, b: any) => {
      const dateA: any = new Date(a.node.date)
      const dateB: any = new Date(b.node.date)
      return dateB - dateA
    })
  }, [props.tag, data.postConnection.edges])

  const tags = useMemo(() => {
    return data?.postConnection?.edges?.reduce((acc: any, post: any) => {
      if (post.node.tags) {
        post.node.tags.forEach((tag: any) => {
          if (acc[tag]) {
            acc[tag]++
          } else {
            acc[tag] = 1
          }
        })
      }
      return acc
    }, {})
  }, [data.postConnection.edges])


  return (
    <>
      <h1>hello world...</h1>
      <div className="flex md:space-x-12">
        <Sidebar tags={tags} currentTag={props.tag} />
        <div>
          <ul className="m-0 pl-0">
            {postList?.map((post: any) => (
              <li key={post.node.id} className="mt-0 pb-2">
                <div className="flex">
                  <span className="text-sm text-gray-400">
                    {moment(post.node.date).format("MMM DD, YYYY")}
                  </span>
                </div>
                <Link href={`/posts/${post.node._sys.filename}`}>
                  {post.node.title}
                </Link>

                {post.node.tags && (
                  <div className="flex flex-wrap gap-2 font-sans text-sm uppercase text-indigo-600 dark:text-indigo-400">
                    {post.node.tags.map((tag: any) => (
                      <Link href={`/posts/tags/${tag}`} className="underline-offset-2 hover:underline" key={tag}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const Sidebar = ({ tags, currentTag }: { tags: any, currentTag?: string }) => {
  return (
    <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-muted pt-5 font-sans md:flex">
      <div className="px-6 py-4">
        <a
          className={`uppercase ${currentTag === undefined ? "pointer-events-none text-indigo-600 dark:text-indigo-400" 
          : "text-zinc-700 hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-500"}`}
          href="/posts"
        >
          All Projects
        </a>
        <ul>
          {Object.keys(tags).sort((a: any, b: any) => a.localeCompare(b)).map((tag: any) => (
            <li className="my-3" key={tag}>
              <Link
                aria-label={`View Posts tagged ${tag}`}
                href={`/posts/tags/${tag}`}
                className={`px-3 py-2 text-sm font-medium uppercase ${currentTag === tag ? "pointer-events-none text-indigo-600 dark:text-indigo-400" 
                : "text-primary hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-500"}`}
              >
                {tag} ({tags[tag]})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
