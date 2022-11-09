import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import loginImg from '../../assets/images/image-login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
  });
  const navigate = useNavigate();

  const checkAccount = () => {
    axios.post('http://localhost/anime_news/admin/api/controller/userLogin.php', data).then((res) => {
      if (res.data.status === 1) {
        if (data.remember) {
          localStorage.setItem('user_token', res.data.id);
          sessionStorage.removeItem('user_token');
          setTimeout(() => {
            navigate('/');
            window.location.reload();
          }, 1000);
        } else {
          sessionStorage.setItem('user_token', res.data.id);
          localStorage.removeItem('user_token');
          setTimeout(() => {
            navigate('/');
            window.location.reload();
          }, 1000);
        }
      } else {
        if (res.data.lock === 1) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      }
    });
  };

  const handleChanged = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleChecked = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAccount();
  };

  return (
    <DefaultLayout>
      <div className="dark:bg-dark-mode-3">
        <div className="flex items-center flex-col px-8 py-4 pt-24 lg:flex-row-reverse max-w-[75rem] mx-auto">
          <div className="pb-6 overflow-hidden">
            <img className="rounded-md object-cover max-w-full h-auto" src={loginImg} alt="register_img" />
          </div>
          <div className="w-full rounded-md border-[1px] border-solid border-[#eee] shadow-lg mb-6 text-center py-4 max-w-[23.125rem] lg:mr-8 dark:bg-dark-mode-2 dark:border-dark-mode-2">
            <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col" method="POST">
              <h2 className="text-xl text-text-color font-bold text-text-color py-6 dark:text-white">
                Sign in to Your Account
              </h2>
              <div className="w-full flex items-center px-5 pb-3">
                <input
                  onChange={handleChanged}
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
                  onChange={handleChanged}
                  value={data.password}
                  required
                  minLength={6}
                  className="outline-none w-full border-[1px] border-solid border-[#ddd] rounded-l-md border-r-transparent px-3 py-2 text-text-color"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                />
                <div className="border-[1px] border-solid border-[#ddd] rounded-r-md border-l-transparent py-2 pr-3 dark:bg-white">
                  <FontAwesomeIcon className="text-xl text-text-color" icon={faEye} />
                </div>
              </div>

              <div className="w-full flex items-center px-5 pb-3 dark:text-white">
                <input type="checkbox" name="remember" id="remember" onChange={handleChecked} value={data.remember} />
                <label className="ml-2" htmlFor="remember">
                  Remember me
                </label>
              </div>

              <div className="w-full flex items-center px-5 pb-6">
                <input
                  required
                  className="w-full text-white font-bold bg-submit-btn rounded-md py-4 cursor-pointer hover:bg-hover-submit-btn hover:text-black transition-all ease-linear"
                  type="submit"
                  value="Login"
                  name="register"
                  id="register"
                ></input>
              </div>
            </form>
            <Link className="text-base text-text-color hover:underline dark:text-white" to="/register-page">
              Don't have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Login;
