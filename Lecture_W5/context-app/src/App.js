import Counter from "./component/Counter";
import Login from "./component/Login";
import { LoginProvider } from "./context/loginContext";
const userInfo = { id: "react", pw: "react" };

export default function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Login />
        <hr />
        <Counter />
      </LoginProvider>
    </div>
  );
}

