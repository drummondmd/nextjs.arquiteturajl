'use client'


import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MainSideBar({ user, role, links }) {
    const router = useRouter()


    function NavLink({ href, nome }) {
        return (
            <Link href={`/${role}/${href}`} className="list-group-item list-group-item-action">
                {nome}
            </Link>
        );
    }

    function logout() {
        document.cookie = "userEmail=; Max-Age=0; path=/";
        window.location.href = "/";
    }

    return (
        <div className="col-lg-2 bg-light border-end min-vh-100 d-flex flex-column justify-content-between p-3">
            <div>
                <div className="text-center mb-4">
                    <div className="rounded-circle bg-secondary text-white d-inline-block mb-2" style={{ width: 64, height: 64, lineHeight: '64px' }}>
                        <span className="fw-bold">{user.profile.firstName.slice(0, 1)}{user.profile.lastName.slice(0, 1)}</span>
                    </div>
                    <div className="fw-semibold">{user.profile.firstName} {user.profile.lastName}</div>
                    <div className="text-muted small">{role}</div>
                </div>

                <div className="list-group">
                    {links.map((link) => (
                        <NavLink key={link.slug} href={link.slug} nome={link.nome} />
                    ))}
                </div>
            </div>

            <div className="mt-4 text-center">
                <button onClick={()=>router.push(`/${role}/info`)} className="btn btn-outline-info btn-sm w-100 mb-2">
                    Informações/Preferencias
                </button>


                <button onClick={logout} className="btn btn-outline-danger btn-sm w-100">
                    Sair
                </button>

            </div>
        </div>
    );
}
