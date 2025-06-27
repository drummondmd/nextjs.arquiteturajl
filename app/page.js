import { getEstimativaCustos, getUser, getUserProfile, getUsers } from "@/lib/db/select";
import Link from "next/link";

export default async function Home() {

const users = await getUsers()
const user =  await getUser(users[0].email)
const profiles = await getUserProfile(users[0].id)
const custos = await getEstimativaCustos()

return <>
<p>Home</p>

<p>{JSON.stringify(user)}</p>
<p>{JSON.stringify(profiles)}</p>
<p>{JSON.stringify(custos)}</p>


<Link href={"/login"}>Login</Link>

</>
}
