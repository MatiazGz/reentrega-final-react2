import { Filters } from "./Filters.jsx";
export function NavBar() {
  return (
    <header>
      <a href="../">
        <h1>React Shop 🛒</h1>
      </a>
      <Filters />
    </header>
  );
}
