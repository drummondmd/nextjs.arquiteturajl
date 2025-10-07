import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"


export const metadata = {
  title: "Julia Lima Arquitetura",
  description: "Escritório de Arquitetura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Analytics />

      </body>
    </html>
  );
}
