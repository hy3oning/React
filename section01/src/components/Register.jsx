import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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
    </>
  );
};
export default Register;
