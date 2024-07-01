import Link from "next/link";

export default function Footer(){
    return(

        <div className="py-10 text-center text-sm">
            <hr />
            <p>
                <Link href="https://shanteru.vercel.app" target="_blank" className="underline-offset-2 hover:text-cyan-300 hover:underline">
                    chantelle's 
                </Link> {" "}
                dev diary
            </p>
        </div>
    )
}