import { Routes, Route, Link } from 'react-router-dom';

import Header from '../../layouts/components/Header';
import Footer from '../../layouts/components/Footer';
import Login from '../Login';
import registerImg from '../../assets/images/image-register.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';

function Register() {
  return (
    <div className="font-source">
      <Header />
      <div className="flex items-center flex-col px-8 py-4 mt-20">
        <div className="pb-6 overflow-hidden">
          <img className="rounded-md object-cover" src={registerImg} alt="register_img" />
        </div>
        <div className="w-full rounded-md border-[1px] border-solid border-[#eee] shadow-lg mb-6">
          <form className="flex items-center justify-center flex-col" action="POST">
            <h2 className="text-xl text-text-color font-bold text-text-color py-6">Create an Account</h2>
            <div className="w-full flex items-center px-5 pb-3">
              <input
                className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
              />
              <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3">
                <FontAwesomeIcon className="text-xl text-text-color" icon={faUser} />
              </div>
            </div>
            <div className="w-full flex items-center px-5 pb-3">
              <input
                className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
              <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3">
                <FontAwesomeIcon className="text-xl text-text-color" icon={faEnvelope} />
              </div>
            </div>
            <div className="w-full flex items-center px-5 pb-3">
              <input
                className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
              <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3">
                <FontAwesomeIcon className="text-xl text-text-color" icon={faEye} />
              </div>
            </div>
            <div className="w-full flex items-center px-5 pb-3">
              <input
                className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
              />
              <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3">
                <FontAwesomeIcon className="text-xl text-text-color" icon={faUser} />
              </div>
            </div>
            <div className="w-full flex items-center px-5 pb-3">
              <input
                className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
              />
              <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3">
                <FontAwesomeIcon className="text-xl text-text-color" icon={faUser} />
              </div>
            </div>
            <div className="w-full flex items-center px-5 pb-6">
              <input
                className="w-full text-white font-bold bg-register-btn rounded-md py-4 cursor-pointer"
                type="submit"
                value="Register"
                name="register"
                id="register"
              ></input>
            </div>
          </form>
        </div>
        <Link className="text-base text-text-color" to="/login-page">
          Have an account? Login
        </Link>
        <Routes>
          <Route path="/login-page" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
