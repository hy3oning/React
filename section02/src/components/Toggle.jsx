import { useState } from "react";
const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  const onClickToggle = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <>
      <button onClick={onClickToggle}>{isOn ? "끄기" : "켜기"}</button>
    </>
  );
};
export default Toggle;
