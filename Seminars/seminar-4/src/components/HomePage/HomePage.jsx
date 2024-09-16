import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1>Главная страница</h1>
      <Link to={"/about"}>О нас</Link>
    </>
  );
}
