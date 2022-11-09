import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  // When DetailPost is mounted then useEffect will be call
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
              <span className="mr-1">224</span>lượt xem
            </div>

            <div className="flex items-center text-sm mb-4">
              <h2 className="font-bold mr-1">Thể loại:</h2>
              <span>Tin Tức Anime</span>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-2">
                <img
                  className="rounded-full"
                  src="https://demo.ramsthemes.com/projects/zettai-bs/wp-content/uploads/2021/11/julian-wan-WNoLnJo7tS8-unsplash-150x150.jpg"
                  alt="author"
                />
              </div>
              <div className="text-base font-bold">
                <h3>Huyy Nguyenz</h3>
              </div>
              <div className="p-2 cursor-pointer">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>

            <div className="text-base mb-4">
              <p>
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

            <div className="text-base mb-4">
              <span>Các diễn viên mới bao gồm:</span>
              <ul className="ml-4">
                <li className="list-disc">
                  <b className="mr-1">Anna Nagase</b>
                  trong vai Tsumugi Himeno
                </li>

                <li className="list-disc">
                  <b className="mr-1">Yumi Uchiyama</b>
                  trong vai Shino Natsume
                </li>
              </ul>
            </div>

            <div className="text-base mb-4">
              <span>Dàn diễn viên bao gồm:</span>
              <ul className="ml-4">
                <li className="list-disc">
                  <b className="mr-1">Anna Nagase</b>
                  trong vai Tsumugi Himeno
                </li>

                <li className="list-disc">
                  <b className="mr-1">Yumi Uchiyama</b>
                  trong vai Shino Natsume
                </li>

                <li className="list-disc">
                  <b className="mr-1">Anna Nagase</b>
                  trong vai Tsumugi Himeno
                </li>

                <li className="list-disc">
                  <b className="mr-1">Yumi Uchiyama</b>
                  trong vai Shino Natsume
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <img
                src="https://s199.imacdn.com/ta/2022/10/22/b65eb323371d7ba9_e7535da9dcfda585_8294316663716796734221.jpg"
                alt="detail-img"
              />
            </div>

            <div className="text-base mb-4">
              <span>Đội ngũ sản xuất chính:</span>
              <ul className="ml-4">
                <li className="list-disc">
                  Đạo diễn:
                  <b className="ml-1">Anna Nagase</b>
                </li>

                <li className="list-disc">
                  Studio:
                  <b className="ml-1">Yumi Uchiyama</b>
                </li>

                <li className="list-disc">
                  Biên dịch:
                  <b className="ml-1">Anna Nagase</b>
                </li>

                <li className="list-disc">
                  Thiết kế nhân vật:
                  <b className="ml-1">Yumi Uchiyama</b>
                </li>

                <li className="list-disc">
                  Soạn nhạc:
                  <b className="ml-1">Yumi Uchiyama</b>
                </li>
              </ul>
            </div>

            <div className="text-base mb-4">
              <p>Phim sẽ được ra mắt vào tháng Giêng năm 2023. </p>
            </div>

            <div className="mb-4">
              <img
                src="https://s199.imacdn.com/ta/2022/10/22/95bad5d76fd7b7df_2be63a728c9f41fc_15144016663716899734221.jpg"
                alt="detail-img"
              />
            </div>

            <div className="text-base mb-4">
              <p>
                Bộ truyện kể về Michi Sonoda, một cô bé đã lên kế hoạch bỏ judo sau giải đấu cuối cùng của cô ở trường
                trung học. Tuy nhiên, người bạn thân nhất của cô là Sanae Takigawa đã mời cô tiếp tục học judo khi lên
                cao trung.
              </p>
            </div>

            <div className="text-base mb-4">
              <p>
                <b className="mr-1">Muraoka</b>đã ra mắt manga trên Weekly Shonen Champion vào tháng 10 năm 2018.
              </p>
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
