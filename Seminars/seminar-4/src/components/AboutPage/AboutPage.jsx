import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <>
      <h1>О нас</h1>
      <Link to={"/home"}>Домой</Link>
    </>
  );
}
