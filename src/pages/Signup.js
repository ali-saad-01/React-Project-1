import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [var3, setVar3] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [existingAccount, setExistingAccount] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Someone tried to sign up");
  // }, [var3]);

  const signupFunc = (e) => {
    const { name, value } = e.target;
    console.log("the target is:", e.target);
    setVar3({ ...var3, [name]: value });
  };

  const storeData = async (e) => {
    e.preventDefault();
    
    if (!var3.username) {
      alert('Please fill in the username');
      return;
    }
    if (!var3.email) {
      alert('Please fill in the email');
      return;
    }
    if (!var3.password) {
      alert('Please fill in the password');
      return;
    }

    console.log(var3);

    try {
      const response = await fetch('http://localhost:4000/createuser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(var3)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("the data is--->:", data);

      if (data.msg === 'User already exists') {
        setExistingAccount(true);
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.log("the error is:", error.message);
    }
  };

  const navLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#e91e63', width: "100%", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
      <div>
        <form className='text-center' style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }} onSubmit={storeData}>
          <label className='form-label text-dark' htmlFor="name">User Name</label> <br />
          <input className="form-control"
            type="text"
            id="name"
            placeholder="Username"
            name="username"
            value={var3.username}
            onChange={signupFunc}
          /> <br />
          <label className="form-label text-dark" htmlFor="email">Email</label> <br />
          <input className="form-control"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={var3.email}
            onChange={signupFunc}
          /> <br />
          <label className="form-label text-dark" htmlFor="password">Enter Password</label> <br />
          <input className="form-control"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={var3.password}
            onChange={signupFunc}
          /> <br />
          <button className="btn btn-primary mt-1 mb-1" type="submit">Sign Up</button>
          {existingAccount && (
            <div>
              <p>Email is already in use.</p>
              <button type="button" onClick={navLogin}>Login</button>
              <button type="button" onClick={() => setExistingAccount(false)}>Stay</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
