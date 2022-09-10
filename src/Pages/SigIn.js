import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import image from "../assests/franck-DoWZMPZ-M9s-unsplash.jpg";
import "../App.css";
const SignIn = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/home");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin">
      <div className="card text-center ">
        <div className="card-body">
          <img src={image} className=" img img-fluid" alt="..."></img>
          <h3 className="card-title">Google Authentication</h3>

          <button className="btn btn-primary" onClick={signInWithGoogle}>
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
