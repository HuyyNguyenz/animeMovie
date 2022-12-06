import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PopularLayout from '../../layouts/PopularLayout';
import DefaultLayout from '../../layouts/DefaultLayout';
import userImage from '../../assets/images/user.png';

function DetailPost() {
  const [comment, setComment] = useState('');
  const [news, setNews] = useState({});
  const [suggestNews, setSuggestNews] = useState([]);
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
  const params = useParams();
  const notify = (content, { type, time }) => {
    switch (type) {
      case 'INFO':
        toast.info(content, { autoClose: time, position: toast.POSITION.BOTTOM_LEFT });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleGetUser();
    handleGetNews();
    handleGetComments();
    handleGetSuggestNews();
  }, [news.id, params]);

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
    if (news.id) {
      axios.get(`http://localhost/anime_news/admin/api/controller/comment.php/${news.id}`).then((res) => {
        setCommentData(res.data);
      });
    }
  };

  const handleGetNews = () => {
    axios.get(`http://localhost/anime_news/admin/api/controller/news.php/detail/${params.newsId}`).then((res) => {
      setNews(res.data);
    });
  };

  const handleGetSuggestNews = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php').then((res) => {
      let randomArray = [];
      let randomNews = [];
      for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * res.data.length);
        if (randomArray.indexOf(random) > -1) {
          i--;
        } else {
          randomArray.push(random);
        }
      }
      randomArray.forEach((rand) => {
        randomNews.push(res.data[rand]);
      });
      setSuggestNews(randomNews);
    });
  };

  // Get current date time
  const handleGetCurrentDateTime = () => {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = time + ' ' + date;

    return dateTime;
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (comment.length > 0 && comment.trim() !== '') {
      const datePosted = handleGetCurrentDateTime();
      const data = {
        content: comment,
        accountName: userData.username,
        datePosted: datePosted,
        accountId: userData.id,
        newsId: news.id,
        accountAvatar: userData.avatar,
      };
      axios.post('http://localhost/anime_news/admin/api/controller/comment.php', data).then((res) => {
        if (res.data.status === 1) {
          handleGetComments();
          setTimeout(() => {
            scrollCommentRef.current.scrollTo(0, scrollCommentRef.current.scrollHeight);
          }, 1000);
        }
      });
      setComment('');
    } else notify('Xin mời bạn nhập nội dung', { type: 'INFO', time: 2000 });
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
        datePosted: datePosted,
      };
      axios.put(`http://localhost/anime_news/admin/api/controller/comment.php/edit`, data).then((res) => {
        if (res.data.status === 1) {
          handleGetComments();
        }
      });
      setComment('');
      setTypeSubmit('Post Comment');
      localStorage.removeItem('comment_id');
      setUpdate(false);
    } else notify('Xin mời bạn nhập nội dung', { type: 'INFO', time: 2000 });
  };

  const handleEdit = (id, content) => {
    setComment(content);
    setTypeSubmit('Update Comment');
    localStorage.setItem('comment_id', id);
    setUpdate(true);
  };

  return (
    <DefaultLayout loading={params}>
      <div className="py-20 px-8 max-w-[75rem] mx-auto md:flex dark:text-white">
        <section className="max-w-[46.25rem] md:mr-8">
          <div className="flex flex-col">
            <div className="text-xl font-bold mb-4">
              <h1>{news.title}</h1>
            </div>

            <div className="text-sm mb-4">
              <span className="italic mr-4">{news.date_posted}</span>
            </div>

            <div className="text-base mb-4">
              <p className="leading-8">{news.short_description}</p>
            </div>

            {news.youtube ? (
              <div className="mb-4">
                <iframe
                  className="sm:w-[28rem] sm:h-[14rem] lg:w-[46.25rem] lg:h-[26.25rem] rounded-lg"
                  width="330"
                  height="200"
                  src={news.youtube}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              ''
            )}

            <div className="mb-4">
              <p className="leading-8">{news.description}</p>
            </div>

            <div className="mb-4">
              <img
                className="w-full h-full"
                src={`http://localhost/anime_news/admin/api/uploads/images/${news.image}`}
                alt="img"
              />
            </div>

            <div className="mb-4 text-right">
              <span className="italic font-bold">{news.author}</span>
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
                  <div className="w-12 h-12 mr-2">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={
                        data.account_avatar
                          ? `http://localhost/anime_news/admin/api/uploads/user_images/${data.account_avatar}`
                          : userImage
                      }
                      alt="user_avatar"
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
              {isUserLogin ? (
                <div className="self-end text-white bg-read-more-btn rounded-lg">
                  <button
                    className="p-2 cursor-pointer"
                    onClick={isUpdate ? handleUpdateComment : handlePostComment}
                    type="submit"
                  >
                    {typeSubmit}
                  </button>
                </div>
              ) : (
                ''
              )}
            </div>
          </form>
        </section>

        <section className="md:flex-1">
          <PopularLayout data={suggestNews} title="Tin Tức Gợi Ý" />
        </section>
      </div>
      <ToastContainer />
    </DefaultLayout>
  );
}

export default DetailPost;
