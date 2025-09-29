import EditProfileForm from "@/components/info/editProfileForm";
import { getUser, getUserCompleto, UserWithProfile } from "@/lib/db/select";

export default async function EditUserPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const query = await searchParams;
    const { userEmail } = query;

    if (!userEmail || typeof(userEmail) === "object") return <p>Usuário não encontrado.</p>

    const user = await getUser(userEmail)

    if (!user) return <p>Usuário não encontrado.</p>

    return (<div className="p-3 mt-4 mx-3 ">
        <h4 className="mb-3">Editar perfil do {user.profile?.firstName} {user.profile?.lastName}</h4>
        <EditProfileForm user={user} />
    </div>)

}