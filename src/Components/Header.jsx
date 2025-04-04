import { NavLink } from "react-router";

export function Header() {
  return (
    <header>
      <h1>PELIS TMDB</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/search">Buscar</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

