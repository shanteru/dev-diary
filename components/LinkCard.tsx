import Link from "next/link"
import moment from "moment"

export const LinkCard = ({
  link,
  title,
  description,
  date
}: {
  link: string
  title: string
  description: string
  date: string
}) => {
  return (
    <Link
      href={link}
      className="group relative overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-800/50 hover:bg-zinc-400/10 dark:border-zinc-600 dark:hover:border-zinc-400/40 dark:hover:bg-zinc-800/10 md:gap-8"
    >
        <article className="p-4 md:p-8">
        <h2 className="z-20 text-xl font-medium text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white lg:text-3xl">
            {title}
        </h2>
        <p className="z-20 text-sm text-zinc-400 group-hover:text-zinc-800 dark:text-zinc-500 dark:group-hover:text-zinc-300">
            {moment(date).format("MMM DD, YYYY")}
            </p>
        <p className="z-20  text-md text-zinc-700 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                {description}
            </p>
        </article>
    </Link>
  )
}
