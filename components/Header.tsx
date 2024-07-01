import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { RxBookmark, RxColorWheel, RxDividerHorizontal, RxDividerVertical, RxGithubLogo, RxLinkedinLogo, RxPerson, RxTokens } from "react-icons/rx"

export default function Header() {
  return (
    <header className="mb-20 mt-16 flex content-center items-center justify-between font-sans text-base">
      <div className="flex gap-4">
        <Link href="/" className="max-sm:hidden">home</Link>
        <Link href="/" className="sm:hidden"><RxColorWheel/></Link>
        <Link href="/posts" className="max-sm:hidden">projects</Link>
        <Link href="/posts" className="sm:hidden"><RxTokens/></Link>
        <Link href="/logs" className="max-sm:hidden">diary</Link>
        <Link href="/logs" className="sm:hidden"><RxBookmark/></Link>
        <Link href="/about" className="max-sm:hidden">about</Link>
        <Link href="/about" className="sm:hidden"><RxPerson/></Link>
      </div>
      <div className="flex justify-between gap-4">
      <Link href="https://github.com/shanteru" target="_blank" ><RxGithubLogo/></Link>
      <Link href="https://www.linkedin.com/in/chantelle-loh-yi-wei/" target="_blank" ><RxLinkedinLogo/></Link>
      <RxDividerVertical className="text-gray-300 dark:text-gray-600"/>
        <ThemeToggle/>
      </div>
    </header>
  )
}
