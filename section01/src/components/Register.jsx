import { useState } from "react";
import { useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef(null);
  const onChange = (e) => {
    console.log(countRef);
    countRef.current++;
    console.log(countRef.current);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
      console.log(inputRef);
    }
  };

  return (
    <>
      <div>
        <div>
          <input
            value={input.name}
            onChange={onChange}
            placeholder={"이름"}
            name="name"
            ref={inputRef}
          />
        </div>
        <div>
          <input
            value={input.birth}
            onChange={onChange}
            type="date"
            name="birth"
          />
        </div>
        <div>
          <select value={input.country} onChange={onChange} name="country">
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
          </select>
          {input.country}
        </div>
        <div>
          <textarea value={input.bio} onChange={onChange} name="bio" />
        </div>
      </div>
      <button type="button" onClick={onSubmit}>
        버튼
      </button>
    </>
  );
};
export default Register;
