
import { getFilesFromGoogleDrive } from "@/lib/google-drive/readFunctions";
import Link from "next/link";

export default async function Home() {


    // const projetos = await getProjetos()
    return <>
        <h1>Home Page</h1>
        <Link href={"/login"}>Login</Link>
    </>
}
