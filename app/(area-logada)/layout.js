import { linksForSideBar } from "@/lib/recursos/links";
import MainSideBar from "@/components/area-logada/main-sidebar";
import { userProfiles, userProfilesFromDatabase } from "@/lib/db-testes";
import Link from "next/link";

export default async function LayoutCliente({ children, params }) {

    ///buscar user
    const user = userProfilesFromDatabase[0]

    const userRole = "arquiteto"
    ///com base no user buscar os recursos

    const links = linksForSideBar.find((item) => item.role === userRole).links

    return (
        <div className="row">
            <MainSideBar links={links} role={userRole} user={user} />

            <div className="col-lg-10">
                {children}

            </div>




        </div>
    )
}