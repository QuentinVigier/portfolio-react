import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="text-white">
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/skills">Mes compétences</NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/contact">Me contacter</NavLink>
        </li>
      </ul>
    </nav>
  );
}
