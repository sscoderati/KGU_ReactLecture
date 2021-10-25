import "./style.css";
import Todo from "./component/Todo";
import Login from "./component/Login";
import { LoginProvider } from "./context/loginContext";
import { StoreProvider } from "./hook/useStore";
import { RootStore } from "./mobx/RootStore";
const userInfo = { id: "react", pw: "react" };

export default function App() {
  const rootStore = new RootStore();

  return (
    <div className="App">
      <LoginProvider>
        <Login />
        <hr />
        <StoreProvider value={rootStore}>
          <Todo />
        </StoreProvider>
      </LoginProvider>
    </div>
  );
}

