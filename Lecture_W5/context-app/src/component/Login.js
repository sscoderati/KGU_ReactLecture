import { useContext, useState } from "react";
import { loginContext } from "../context/loginContext";

const userInfo = { id: "react", pw: "react" };

export default function Login() {
  const { login, setLogin } = useContext(loginContext);
  const [auth, setAuth] = useState({ id: "", pw: "" });

  const checkLogin = () => {
    if (userInfo.id === auth.id && userInfo.pw === auth.pw) {
      setLogin(!login);
      alert("login success !!!");
    } else {
      alert("login fail !!!");
    }
  };

  return (
    <div>
      <label>ID</label>
      <div>
        <input
          type="text"
          onChange={(e) => setAuth({ ...auth, id: e.target.value })}
        />
      </div>
      <label>PW</label>
      <div>
        <input
          type="text"
          onChange={(e) => setAuth({ ...auth, pw: e.target.value })}
        />
      </div>
      <button onClick={checkLogin}>login</button>
    </div>
  );
}
