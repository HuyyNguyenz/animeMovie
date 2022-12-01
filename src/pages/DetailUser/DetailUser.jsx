import axios from 'axios';
import { useState, useEffect } from 'react';

import DefaultLayout from '../../layouts/DefaultLayout';

function DetailUser() {
  const [userData, setUserData] = useState({});
  const [updateData, setUpdateData] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
    firstName: '',
    lastName: '',
    userImage: '',
  });
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = () => {
    const id = localStorage.getItem('user_token')
      ? localStorage.getItem('user_token')
      : sessionStorage.getItem('user_token');
    axios.get(`http://localhost/anime_news/admin/api/controller/register.php/${id}`).then((res) => {
      setUserData(res.data);
    });
  };

  const handleChanged = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updateData);
  };

  return (
    <DefaultLayout>
      <div className="py-20 px-8 max-w-[75rem] mx-auto dark:text-white">
        <div className="text-2xl font-bold mb-4">
          <h1>Trang Cá Nhân</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-40 h-40">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="user_avatar"
            />
          </div>
          <div className="py-2">
            <h3>Username: {userData.username}</h3>
          </div>
          <div className="py-2">
            <h3>Email: {userData.email}</h3>
          </div>
          <div className="py-2">
            <h3>First Name: {userData.first_name}</h3>
          </div>
          <div className="py-2">
            <h3>Last Name: {userData.last_name}</h3>
          </div>
          {isEdit ? (
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center" action="POST">
                <div className="flex flex-col w-full">
                  <label className="mb-2" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="mb-2 outline-none w-full border border-solid border-[#ddd] rounded-md px-3 py-2 text-text-color"
                    onChange={handleChanged}
                    type="email"
                    name="email"
                    id="email"
                    value={updateData.email}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2" htmlFor="oldPassword">
                    Old Password:
                  </label>
                  <input
                    className="mb-2 outline-none w-full border border-solid border-[#ddd] rounded-md px-3 py-2 text-text-color"
                    onChange={handleChanged}
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    value={updateData.oldPassword}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2" htmlFor="newPassword">
                    New Password:
                  </label>
                  <input
                    className="mb-2 outline-none w-full border border-solid border-[#ddd] rounded-md px-3 py-2 text-text-color"
                    onChange={handleChanged}
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    value={updateData.newPassword}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2" htmlFor="firstName">
                    First Name:
                  </label>
                  <input
                    className="mb-2 outline-none w-full border border-solid border-[#ddd] rounded-md px-3 py-2 text-text-color"
                    onChange={handleChanged}
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={updateData.firstName}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2" htmlFor="lastName">
                    Last Name:
                  </label>
                  <input
                    className="mb-2 outline-none w-full border border-solid border-[#ddd] rounded-md px-3 py-2 text-text-color"
                    onChange={handleChanged}
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={updateData.lastName}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2" htmlFor="userImage">
                    User Image:
                  </label>
                  <input
                    onChange={handleChanged}
                    className="mb-2 outline-none w-full border border-solid border-[#ddd] rounded-md px-3 py-2 text-text-color"
                    type="file"
                    name="userImage"
                    id="userImage"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <input
                    className="bg-[#ff9700] border-none cursor-pointer my-4 outline-none w-full rounded-md px-3 py-2 text-white"
                    type="submit"
                    value="Update Profile"
                    name="updateProfile"
                    id="updateProfile"
                  />
                </div>
              </form>
            </div>
          ) : (
            ''
          )}
          <button onClick={() => setEdit(!isEdit)} className="my-2 p-2 bg-read-more-btn rounded text-white">
            Edit Profile
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default DetailUser;
