import { TinaMarkdown } from "tinacms/dist/rich-text"
import dynamic from "next/dynamic"
import Image from "next/image"

export const TextBox = (props: any) => {
  return (
    <>
      <div className="bg-gray-100 p-8 py-1 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <TinaMarkdown content={props.text} />
      </div>
    </>
  )
}

export const PullQuote = (props: any) => {
  return (
    <>
      <blockquote className="mb-1 border-l-4 border-gray-200 leading-8 dark:border-gray-700">
        <p className="mb-1 opacity-80">{props.text}</p>
      </blockquote>
      {props.author && (
        <a className="text-[.8rem] italic opacity-80" href={props.authorLink}>
          - {props.author}
        </a>
      )}
    </>
  )
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })

export const VideoPlayer = (props: any) => {
  return <ReactPlayer width="100%" controls url={props.url} />
}

export const CaptionedImage = (props: any) => {
  return (
    <figure className="flex flex-col items-center justify-center py-6 md:ml-[-50px] md:min-w-[calc(100%+100px)] lg:ml-[-130px] xl:min-w-[calc(100%+260px)]">
      <Image style={{ maxWidth: "100%" }}  width={props.imgWidth} height={props.imgHeight}
    layout="responsive" src={props.imgUrl} alt={props.alt} />
      <figcaption className="text-[,8em]">{props.caption}</figcaption>
    </figure>
  )
}
