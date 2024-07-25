import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  useEffect(() => {
    const auth = localStorage.getItem('user');
    if(auth) {
      navigate('/')
    }
  })

  const colllectData = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const result = await fetch('http://localhost:8200/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await result.json();
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data))
    navigate('/')
  }

  return (

    <>
      <div className="container-fluid py-3">
        <form className="m-auto w-25">
          <h3 className="mb-3">Sign Up</h3>
          <div className="mb-4">
            <input value={name} onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control rounded-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-4">
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control rounded-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <input value={password} onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control rounded-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Password"
            />
          </div>
          <button onClick={colllectData} type="submit" className="btn btn-primary rounded-0">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
