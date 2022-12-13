import axios from 'axios';
import md5 from 'md5';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

import DefaultLayout from '../../layouts/DefaultLayout';
import userImage from '../../assets/images/user.png';

function DetailUser() {
  const [userData, setUserData] = useState({});
  const [fileUpload, setFileUpload] = useState({});
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
  }, [userData]);

  const notify = (content, { type, time }) => {
    switch (type) {
      case 'SUCCESS':
        toast.success(content, { autoClose: time, position: toast.POSITION.TOP_LEFT });
        break;
      case 'INFO':
        toast.info(content, { autoClose: time, position: toast.POSITION.TOP_LEFT });
        break;
      case 'ERROR':
        toast.error(content, { autoClose: time, position: toast.POSITION.TOP_LEFT });
        break;
      default:
        break;
    }
  };

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

  const handleChangedFile = (e) => {
    setFileUpload({ [e.target.name]: { files: e.target.files[0] } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const oldPassword = md5(updateData.oldPassword);
    const currentPassword = userData.password;
    if (oldPassword === currentPassword && updateData.newPassword !== '') {
      const data = {
        id: userData.id,
        email: updateData.email ? updateData.email : userData.email,
        password: updateData.newPassword,
        firstName: updateData.firstName ? updateData.firstName : userData.first_name,
        lastName: updateData.lastName ? updateData.lastName : userData.last_name,
        userImage: fileUpload.userImage ? fileUpload.userImage.files.name : null,
      };
      if (data.userImage !== null) {
        const formData = new FormData();
        formData.append('userImage', fileUpload.userImage.files);
        axios.post('http://localhost/anime_news/admin/api/controller/uploadFile.php', formData).then((res) => {
          console.log(res.data);
        });
      }
      axios.put('http://localhost/anime_news/admin/api/controller/register.php', data).then((res) => {
        if (res.data.status === 1) {
          handleGetUser();
        }
      });
      notify('Cập nhật tài khoản thành công', { type: 'SUCCESS', time: 2000 });
    } else if (updateData.oldPassword === '' && updateData.newPassword === '') {
      const data = {
        id: userData.id,
        email: updateData.email ? updateData.email : userData.email,
        password: currentPassword,
        firstName: updateData.firstName ? updateData.firstName : userData.first_name,
        lastName: updateData.lastName ? updateData.lastName : userData.last_name,
        userImage: fileUpload.userImage ? fileUpload.userImage.files.name : null,
      };
      if (data.userImage !== null) {
        const formData = new FormData();
        formData.append('userImage', fileUpload.userImage.files);
        axios.post('http://localhost/anime_news/admin/api/controller/uploadFile.php', formData).then((res) => {
          console.log(res.data);
        });
      }
      axios.put('http://localhost/anime_news/admin/api/controller/register.php', data).then((res) => {
        if (res.data.status === 1) {
          handleGetUser();
        }
      });
      notify('Cập nhật tài khoản thành công', { type: 'SUCCESS', time: 2000 });
    } else if (updateData.oldPassword === '' && updateData.newPassword !== '') {
      notify('Xin mời bạn nhập mật khẩu cũ', { type: 'INFO', time: 1500 });
    } else if (updateData.oldPassword !== '' && updateData.newPassword === '') {
      notify('Xin mời bạn nhập mật khẩu mới', { type: 'INFO', time: 1500 });
    } else {
      notify('Mật khẩu cũ không trùng khớp', { type: 'ERROR', time: 1500 });
    }
  };

  return (
    <DefaultLayout>
      <Helmet>
        <title>Trang Cá Nhân</title>
      </Helmet>
      <div className="py-20 px-8 max-w-[75rem] mx-auto dark:text-white">
        <div className="text-2xl font-bold mb-4">
          <h1>Trang Cá Nhân</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 h-36">
            <img
              className="w-full h-full object-cover rounded-full"
              src={
                userData.avatar
                  ? `http://localhost/anime_news/admin/api/uploads/user_images/${userData.avatar}`
                  : userImage
              }
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center"
                action="POST"
                encType="multipart/form-data"
              >
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
                    minLength={6}
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
                    minLength={6}
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
                    onChange={handleChangedFile}
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
      <ToastContainer />
    </DefaultLayout>
  );
}

export default DetailUser;
