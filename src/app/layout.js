import Link from "next/link";


export default function Layout({ children }) {
  return (
    <html lang="es">
      <body>
      <header>
        <h1>PELIS TMDB</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/search">Buscar</Link>
            </li>
          </ul>
        </nav>
      </header>
        {children}
      </body>
    </html>
  );
}