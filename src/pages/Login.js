import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [var2, setVar2] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  
  const navforgot = () => {
    navigate('/forgetpass')
  };

  const loginfunc = (e) => {
    const { name, value } = e.target;
    setVar2({ ...var2, [name]: value });
  };

  const storedata2 = async (e) => {
    e.preventDefault();
    const { email, password } = var2;

  

    try {
      const response = await fetch('http://localhost:4000/getuser', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("the data is--->:", data[2].password);

      if (data && data[3].email === email && data[3].password === password) {
        // Authentication successful, redirect to dashboard or any other page // Assuming you have a login function in AuthContext
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.log("the error is:", error.message);
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#e91e63', width: "100%", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
      <form style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }} onSubmit={storedata2}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={var2.email} onChange={loginfunc} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={var2.password} onChange={loginfunc} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-primary" onClick={navforgot}>Forgot Password?</button>
        </div>

      </form>
    </div>
  );
}

export default Login;
