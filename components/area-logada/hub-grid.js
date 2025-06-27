'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HubGrid({ descricao, referencia, itens, user, fotos, role }) {
  const router = useRouter()

  function Card({ slug, endereco, cidade, titulo }) {
    return (
      <div className="col-md-6 col-lg-4 mb-4 d-flex">
        <div className="card shadow-sm w-100">
          {/* Substitua o SVG abaixo por <img src={fotos?.[slug] || '...'} ...> futuramente */}
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Imagem"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>{titulo}</title>
            <rect width="100%" height="100%" fill="#dee2e6" />
            <text x="50%" y="50%" fill="#6c757d" dy=".3em" textAnchor="middle">
              Imagem
            </text>
          </svg>

          <div className="card-body">
            <h5 className="card-title fw-semibold">{titulo}</h5>
            <p className="card-text text-muted">{endereco}, {cidade}</p>
            <Link href={`/${role}/${referencia}/${slug}`} className="btn btn-outline-primary btn-sm">
              Abrir {descricao.slice(0,-1).toLowerCase()}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">{descricao}</h2>
        <button onClick={()=>router.back()} className="btn btn-secondary btn-sm">Voltar</button>
      </div>

      <div className="row">
        {itens.length === 0  && <p>Não encontramos nehum {descricao.slice(0,-1)}.</p>}
        {itens.length > 0 &&
        itens.map((item) => (
          <Card
            key={item.id}
            titulo={item.titulo}
            slug={item.slug}
            endereco={item.endereco}
            cidade={item.cidade}
          />
        ))}
      </div>
    </div>
  );
}
