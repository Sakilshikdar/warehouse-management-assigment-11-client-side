import "./Register.css";
import loginIcon from "../../../images/icon/login.ico";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification} from "react-firebase-hooks/auth";
import Social from "../../Hooks/Social";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shear/Loading/Loading'

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/login");

  }

  if(error){
   return toast(error)
  }

  const handleLogin = () => {
    navigate("/login");
  };

  if (loading) {
    return <Loading></Loading>
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
      createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "5px" }}>Please Register</h2>
      <form onSubmit={handleRegister} className="form">
        <input type="text" name="name" id="" placeholder="Your name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email-Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          className="btn btn-primary mx-auto w-50 mt-2"
          type="submit"
          value="Register"
        />
        <div className=" d-flex  align-items-center ">
          <div>
            <img className="mx-1" height={25} src={loginIcon} alt="" />
          </div>
          <div className="register">
            Already have an Account?
            <span
              style={{ cursor: "pointer" }}
              className="text-danger "
              onClick={handleLogin}
              >
              Please Login
            </span>
          </div>
        </div>
        <Social></Social>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
