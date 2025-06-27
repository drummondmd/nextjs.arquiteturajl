import Link from "next/link";

  export default function HorizontalTab({ arrayOfTabs,display,setDisplay }) {
    return (
      <ul className="nav nav-tabs my-4">
        {arrayOfTabs.map((item) =>
          item.isLink ? (
            <li className="nav-item" key={item.nome}>
              <Link
                href={item.href}
                className="nav-link text-primary"
              >
                {item.nome}
              </Link>
            </li>
          ) : (
            <li className="nav-item" key={item.nome}>
              <button
                className={`nav-link ${display === item.nome ? "active" : ""}`}
                onClick={() => setDisplay(item.nome)}
              >
                {item.nome}
              </button>
            </li>
          )
        )}
      </ul>
    );
  }