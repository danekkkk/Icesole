import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

export function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Icesole Logo" />
    </Link>
  );
}
