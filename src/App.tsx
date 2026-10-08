import { UsersWorkspace } from "./components/UsersWorkspace";
import "./App.css";

export default function App() {
  return (
    <main>
      <header>
        <span>React useEffect</span>
        <h1>Пользователи</h1>
        <p>Выберите человека, чтобы загрузить подробности</p>
      </header>
      <UsersWorkspace />
    </main>
  );
}
