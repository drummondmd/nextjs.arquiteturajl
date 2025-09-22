'use client'

import { UserWithProfile } from "@/lib/db/select"
import { useState } from "react"
import EditProfileForm from "./editProfileForm"

export default function InfoComponent({ user }: { user: UserWithProfile }) {

    const [editProfile, setEditProfile] = useState(false)


    const Cliente = () => {
        return (<p>Cliente</p>)
    }

    const Arquiteto = () => {
        return (<p>Arquiteto</p>)
    }




    return (
        <div className="mt-2">
            <h4>Informações e preferencias</h4>
            <div>Header</div>
            <div>Preferencias comuns</div>
            <div>
                <button onClick={() => setEditProfile(true)}>Atualizar perfil</button>
                <button onClick={() => setEditProfile(false)}>Outras configurações</button>
            </div>
            <div>{editProfile && <EditProfileForm user={user} />}</div>
            {!editProfile && (
                <>
                    <div>{user?.userType === "arquiteto" && <Arquiteto />}</div>
                    <div>{user?.userType === "cliente" && <Cliente />}</div>
                </>
            )}



        </div>
    )
}