import "./App.css";
import Profile from "./components/Profile";
import { useState } from "react";

function App() {
  const [btn, setBtn] = useState();
  const onChange = (e) => {
    setBtn(e.target.value);
  };
  return (
    <>
      <Profile name={"이상현"} />
      <button onChange={onChange}></button>
    </>
  );
}

export default App;
