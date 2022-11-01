import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import registerImg from '../../assets/images/image-register.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/api/controller/register.php', data).then((res) => {
      if (res.data.status === 1) {
        setTimeout(() => {
          alert('Đăng ký tài khoản thành công');
          navigate('/login-page');
        }, 1000);
      } else alert('Username hoặc Email đã được đăng ký');
    });
  };

  return (
    <DefaultLayout>
      <div className="dark:bg-dark-mode-3">
        <div className="flex items-center flex-col px-8 py-4 pt-24 lg:flex-row-reverse max-w-[75rem] mx-auto">
          <div className="pb-6 overflow-hidden">
            <img className="rounded-md object-cover max-w-full h-auto" src={registerImg} alt="register_img" />
          </div>
          <div className="w-full rounded-md border-[1px] border-solid border-[#eee] shadow-lg mb-6 text-center py-4 max-w-[23.125rem] lg:mr-8 dark:bg-dark-mode-2 dark:border-dark-mode-2">
            <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col" method="POST">
              <h2 className="text-xl text-text-color font-bold text-text-color py-6 dark:text-white">
                Create an Account
              </h2>
              <div className="w-full flex items-center px-5 pb-3">
                <input
                  onChange={handleChange}
                  value={data.username}
                  required
                  className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                />
                <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3 dark:bg-white">
                  <FontAwesomeIcon className="text-xl text-text-color" icon={faUser} />
                </div>
              </div>
              <div className="w-full flex items-center px-5 pb-3">
                <input
                  onChange={handleChange}
                  value={data.email}
                  required
                  className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
                <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3 dark:bg-white">
                  <FontAwesomeIcon className="text-xl text-text-color" icon={faEnvelope} />
                </div>
              </div>
              <div className="w-full flex items-center px-5 pb-3">
                <input
                  onChange={handleChange}
                  value={data.password}
                  required
                  className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                  minLength={6}
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                />
                <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3 dark:bg-white">
                  <FontAwesomeIcon className="text-xl text-text-color" icon={faEye} />
                </div>
              </div>
              <div className="w-full flex items-center px-5 pb-3">
                <input
                  onChange={handleChange}
                  value={data.firstName}
                  required
                  className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                />
                <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3 dark:bg-white">
                  <FontAwesomeIcon className="text-xl text-text-color" icon={faUser} />
                </div>
              </div>
              <div className="w-full flex items-center px-5 pb-3">
                <input
                  onChange={handleChange}
                  value={data.lastName}
                  required
                  className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                />
                <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3 dark:bg-white">
                  <FontAwesomeIcon className="text-xl text-text-color" icon={faUser} />
                </div>
              </div>
              <div className="w-full flex items-center px-5 pb-6">
                <input
                  className="w-full text-white font-bold bg-submit-btn rounded-md py-4 cursor-pointer hover:bg-hover-submit-btn hover:text-black transition-all ease-linear"
                  type="submit"
                  value="Register"
                  name="register"
                  id="register"
                ></input>
              </div>
            </form>
            <Link className="text-base text-text-color hover:underline dark:text-white" to="/login-page">
              Have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Register;
