import { UserWithProfile } from "@/lib/db/select";

export default function EditProfileForm({ user }: { user: UserWithProfile }){

    const keys =  Object.keys(user)
    const profileKeys =  Object.keys(user?.profile)


    return(
        <div>
            {keys.map(elem => <p>{elem}</p>)}
            {profileKeys.map(elem =><p>{elem}</p>)}

        </div>
    )
}