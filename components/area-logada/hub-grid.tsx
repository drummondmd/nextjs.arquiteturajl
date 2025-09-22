'use client'

import { UserCompleto } from "@/lib/db/select";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HubGridProjetos({ user} :{user:UserCompleto}) {
  const role = user?.userType

  const itens = user?.projects

  const router = useRouter()

  function Card({ projeto, role, referencia }) {
    const imagemSrc =
      projeto.coverUrl ||
      "https://placehold.co/600x400.png?text=Imagem+Indispon%C3%ADvel";

    return (
      <div className="col-md-6 col-lg-4 mb-4 d-flex">
        <div className="card shadow-sm w-100">
          <div className="ratio ratio-16x9 position-relative">
            <Image
              src={imagemSrc}
              alt={projeto.title}
              fill
              className="rounded-top object-fit-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title fw-semibold">{projeto.title}</h5>
            <Link
              href={`/${role}/projetos/${projeto.slug}`}
              className="btn btn-outline-primary btn-sm"
            >
              Abrir projeto.
            </Link>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Projetos</h2>
        <button onClick={() => router.back()} className="btn btn-secondary btn-sm">Voltar</button>
      </div>

      <div className="row">
        {itens.length === 0 && <p>Não encontramos nehum projeto .</p>}
        {itens.length > 0 &&
          itens.map((item) => (
            <Card
              key={item.id}
              projeto={item}
              role={role}
              referencia={"projetos"}

            />
          ))}
      </div>
    </div>
  );
}
