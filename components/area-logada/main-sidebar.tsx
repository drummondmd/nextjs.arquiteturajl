'use client'


import { Info, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "../ui/modal";
import { useState } from "react";

export default function MainSideBar({ user, role, links, image }: { user: any, role: string, links: Array<{ nome: string, slug: string }> | undefined, image?: string }) {
    const router = useRouter();
    const [modal, setModal] = useState<boolean>(false)

    const picture = image ? <img className="rounded-circle" src={image}></img> : <span className="fw-bold">{user.profile.firstName.slice(0, 1)}{user.profile.lastName.slice(0, 1)}</span>



    function NavLink({ href, nome }: { href: string, nome: string }) {
        return (
            <Link href={`/${role}/${href}`} className="list-group-item list-group-item-action">
                {nome}
            </Link>
        );
    }

    return (
        <>
            {/* Telas menores */}
            <div className="md:hidden grid grid-cols-3 items-center gap-2 p-2 bg-white shadow">
                {/* Modal para navegação */}
                <Modal isOpen={modal} onClose={() => setModal(false)} title={undefined}>
                    <div className="flex flex-col gap-2">
                        {links?.map((link) => (
                            <NavLink key={link.slug} href={link.slug} nome={link.nome} />
                        ))}
                    </div>
                </Modal>

                {/* Botão do menu */}
                <button
                    onClick={() => setModal(!modal)}
                    className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition"
                >
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>

                {/* Usuário */}
                <div className="flex flex-col items-center">
                    <div className="rounded-full bg-gray-500 text-white flex items-center justify-center mb-1" style={{ width: 32, height: 32 }}>
                        {picture}
                    </div>
                    <div className="font-semibold text-sm">{user.profile.firstName} {user.profile.lastName}</div>
                    <div className="text-gray-400 text-xs">{role}</div>
                </div>

                {/* Botões de ação */}
                <div className="flex flex-col items-center gap-2">
                    <button
                        onClick={() => router.push(`/${role}/info`)}
                        className="flex items-center justify-center rounded-full p-2 hover:bg-blue-100 text-blue-600 transition w-full"
                        title="Informações"
                    >
                        <Info className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => router.push("/api/auth/signout")}
                        className="flex items-center justify-center rounded-full p-2 hover:bg-red-100 text-red-600 transition"
                        title="Sair"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Telas maiores */}
            <div className="hidden md:block bg-gray-100 p-2 min-h-screen">
                <div>
                    <div className="flex flex-col items-center mb-6">
                        <div className="rounded-full bg-gray-500 text-white flex items-center justify-center mb-2" style={{ width: 64, height: 64 }}>
                            {picture}
                        </div>
                        <div className="font-semibold text-lg">{user.profile.firstName} {user.profile.lastName}</div>
                        <div className="text-gray-400 text-sm">{role}</div>
                    </div>
                    <div className="list-group">
                        {links?.map((link) => (
                            <NavLink key={link.slug} href={link.slug} nome={link.nome} />
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                    <button
                        onClick={() => router.push(`/${role}/info`)}
                        className="w-full py-2 px-4 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                    >
                        Informações/Preferências
                    </button>
                    <button
                        onClick={() => router.push("/api/auth/signout")}
                        className="w-full py-2 px-4 rounded bg-red-50 text-red-700 hover:bg-red-100 transition"
                    >
                        Sair
                    </button>
                </div>
            </div>
        </>

    );
}
