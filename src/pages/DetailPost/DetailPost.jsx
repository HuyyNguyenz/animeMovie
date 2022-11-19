import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import PopularLayout from '../../layouts/PopularLayout/PopularLayout';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';

function DetailPost() {
  const [comment, setComment] = useState('');
  const [typeSubmit, setTypeSubmit] = useState('Post Comment');
  const [isUserLogin] = useState(() => {
    const userToken = localStorage.getItem('user_token')
      ? localStorage.getItem('user_token')
      : sessionStorage.getItem('user_token');
    return !!userToken;
  });
  const [userData, setUserData] = useState({});
  const [commentData, setCommentData] = useState({});
  const [isUpdate, setUpdate] = useState(false);
  const scrollCommentRef = useRef();

  useEffect(() => {
    handleGetUser();
    handleGetComments();
  }, []);

  const handleGetUser = () => {
    const id = localStorage.getItem('user_token')
      ? localStorage.getItem('user_token')
      : sessionStorage.getItem('user_token');
    // Call API get user data
    axios.get(`http://localhost/anime_news/admin/api/controller/register.php/${id}`).then((res) => {
      setUserData(res.data);
    });
  };

  const handleGetComments = () => {
    // Call API get comment data
    axios.get('http://localhost/anime_news/admin/api/controller/comment.php').then((res) => {
      setCommentData(res.data);
    });
  };

  // Get current date time
  const handleGetCurrentDateTime = () => {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;

    return dateTime;
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (comment.length > 0 && comment.trim() !== '') {
      const datePosted = handleGetCurrentDateTime();
      const data = { content: comment, accountName: userData.username, datePosted: datePosted, accountId: userData.id };
      axios.post('http://localhost/anime_news/admin/api/controller/comment.php', data).then((res) => {
        if (res.data.status === 1) {
          handleGetComments();
          setTimeout(() => {
            scrollCommentRef.current.scrollTo(0, scrollCommentRef.current.scrollHeight);
          }, 1000);
        }
      });
      setComment('');
    } else alert('Xin mời bạn nhập nội dung');
  };

  const handleDeleteComment = (id) => {
    axios.delete(`http://localhost/anime_news/admin/api/controller/comment.php/${id}/delete`).then((res) => {
      if (res.data.status === 1) {
        handleGetComments();
      }
    });
  };

  const handleUpdateComment = (e) => {
    e.preventDefault();
    const commentId = localStorage.getItem('comment_id');
    if (comment.length > 0 && comment.trim() !== '') {
      const datePosted = handleGetCurrentDateTime();
      const data = {
        id: commentId,
        content: comment,
        accountName: userData.username,
        datePosted: datePosted,
        accountId: userData.id,
      };
      axios.put(`http://localhost/anime_news/admin/api/controller/comment.php/${commentId}/edit`, data).then((res) => {
        if (res.data.status === 1) {
          handleGetComments();
        } else {
          console.log('Failed');
        }
      });
      setComment('');
      setTypeSubmit('Post Comment');
      localStorage.removeItem('comment_id');
      setUpdate(false);
    } else alert('Xin mời bạn nhập nội dung');
  };

  const handleEdit = (id, content) => {
    setComment(content);
    setTypeSubmit('Update Comment');
    localStorage.setItem('comment_id', id);
    setUpdate(true);
  };

  return (
    <DefaultLayout>
      <div className="py-20 px-8 max-w-[75rem] mx-auto md:flex dark:text-white">
        <section className="md:flex-1 md:mr-8">
          <div className="flex flex-col">
            <div className="text-xl font-bold mb-4">
              <h1>Anime Mou Ippon công bố teaser mới</h1>
            </div>

            <div className="text-sm mb-4">
              <span className="italic mr-4">16:09 22/10/2022</span>
            </div>

            <div className="text-base mb-4">
              <p className="leading-8">
                Trang web chính thức cho anime Mou Ippon ("Ippon" Again!) dựa trên manga của tác giả Yu Muraoka đã đăng
                tải teaser video thứ hai cho bộ phim, đồng thời tiết lộ một số nhân vật mới
              </p>
            </div>

            <div className="mb-4">
              <iframe
                className="sm:w-[28rem] sm:h-[14rem] lg:w-[46.25rem] lg:h-[26.25rem] rounded-lg"
                width="330"
                height="200"
                src="https://www.youtube.com/embed/jpiz5RLqSgw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mb-4">
              <p className="leading-8">
                Các diễn viên chính bao gồm: * Yoshitsugu Matsuoka trong vai Yuya Tenjo * Akari Kito trong vai Kaori
                Hojo * Kaori Maeda trong vai Lexia Von Arcelia Milepensee phụ trách sản xuất anime. Phim sẽ được ra mắt
                vào tháng 4 năm 2023. Một cánh cửa dẫn đến một thế giới khác mở ra trước mắt một cậu bé bị bắt nạt dã
                man suốt cuộc đời. Điều này đã cho phép cậu truy cập vào tất cả mọi thứ, như khả năng gian lận và tạo ra
                một cánh cổng cho phép cậu đi lại giữa thế giới cũ và mới của mình! Liệu kẻ bại trận này có thể xoay
                chuyển cuộc sống của mình khi trở về nhà ...? Hiện bộ truyện đã có 1,5 triệu bản được lưu hành trên toàn
                thế giới.{' '}
              </p>
            </div>

            <div className="mb-4">
              <img
                className="w-full h-full"
                src="https://s199.imacdn.com/ta/2022/11/17/b16b2afe7fde0efc_2021ff8dbca02268_30930916686966964734221.jpg"
                alt="img"
              />
            </div>

            <div className="mb-4 text-right">
              <span className="italic font-bold">Khang Dora</span>
            </div>

            <hr className="bg-grey-ccc mb-4" />

            <div className="text-base mb-4">
              <p>
                <span className="mr-1">{commentData.length}</span>Comments
              </p>
            </div>

            <div ref={scrollCommentRef} className="overflow-y-scroll max-h-[31.25rem] mb-4">
              {Array.from(commentData).map((data) => (
                <div key={data.id} className="flex items-start mb-4 mr-4">
                  <div className="w-10 h-10 mr-2">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://secure.gravatar.com/avatar/29a258fbb2d69d21b675424f7bf8ae90?s=100&d=mm&r=g"
                      alt="user"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex-1 text-base bg-navbar-bg-color px-4 pt-2 pb-4 rounded-lg dark:bg-dark-mode-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold mb-1">{data.account_name}</h3>
                        <span>{data.date_posted}</span>
                      </div>
                      <p className="max-w-[13.75rem] sm:max-w-[25rem] md:max-w-[17.5rem] lg:max-w-[31.25rem] break-words">
                        {data.content}
                      </p>
                    </div>

                    {userData.id === data.account_id ? (
                      <div className="flex self-end">
                        <div onClick={() => handleDeleteComment(data.id)} className="px-2 cursor-pointer">
                          <span>Delete</span>
                        </div>
                        <div onClick={() => handleEdit(data.id, data.content)} className="px-2 cursor-pointer">
                          <span>Edit</span>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form method="POST">
            <div className="flex flex-col items-start justify-start">
              <div className="w-full border-2 border-solid border-grey-ccc mb-4 rounded-lg overflow-hidden">
                {isUserLogin ? (
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    name="post-comment"
                    aria-label="Add a comment..."
                    className="w-full px-2 pt-2 pb-8 outline-none resize-none dark:bg-dark-mode-5"
                    placeholder="Add a comment..."
                  />
                ) : (
                  <textarea
                    disabled
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    name="post-comment"
                    aria-label="You need to login to comment"
                    className="w-full px-2 pt-2 pb-8 outline-none resize-none dark:bg-dark-mode-5"
                    placeholder="You need to login to comment"
                  />
                )}
              </div>

              <div className="self-end text-white bg-read-more-btn rounded-lg">
                <input
                  className="p-2 cursor-pointer"
                  onClick={isUpdate ? handleUpdateComment : handlePostComment}
                  type="submit"
                  value={typeSubmit}
                />
              </div>
            </div>
          </form>
        </section>

        <section>
          <PopularLayout />
          <PopularLayout />
        </section>
      </div>
    </DefaultLayout>
  );
}

export default DetailPost;
