import Link from "next/link";

export default function LoginPage(){
    return(
        <>
        <Link href={"/arquiteto"}>Arquiteto</Link>
        <br></br>
        <Link href={"/cliente"}>Cliente</Link>
        </>
    )
}