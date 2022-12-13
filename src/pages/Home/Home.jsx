import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import SectionPreview from '../../layouts/components/SectionPreview';
import PopularLayout from '../../layouts/PopularLayout';
import DefaultLayout from '../../layouts/DefaultLayout';

function Home() {
  const [news, setNews] = useState([]);
  const [mangaNews, setMangaNews] = useState([]);
  const [animeNews, setAnimeNews] = useState([]);
  const [cosplayNews, setCosplayNews] = useState([]);
  const [charactersNews, setCharactersNews] = useState([]);
  const [cultureNews, setCultureNews] = useState([]);
  const [path, setPath] = useState([]);

  useEffect(() => {
    handleGetRandomNews();
    handleGetMangaNews();
    handleGetAnimeNews();
    handleGetCosplayNews();
    handleGetCharactersNews();
    handleGetCultureNews();
  }, []);

  const handleGetRandomNews = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php').then((res) => {
      let randomArray = [];
      let randomNews = [];
      for (let i = 0; i < 5; i++) {
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
      setNews(randomNews);
      const pathArray = [];
      randomNews.forEach((news) => {
        switch (news.category_id) {
          case 'anime':
            pathArray.push({ category_id: 'anime', to: `/tin-tuc-anime/${news.title}/${news.id}` });
            break;
          case 'characters':
            pathArray.push({
              category_id: 'characters',
              to: `/tin-tuc-nhan-vat/${news.title}/${news.id}`,
            });
            break;
          case 'manga':
            pathArray.push({
              category_id: 'manga',
              to: `/tin-tuc-manga/${news.title}/${news.id}`,
            });
            break;
          case 'culture':
            pathArray.push({
              category_id: 'culture',
              to: `/van-hoa-nhat-ban/${news.title}/${news.id}`,
            });
            break;
          case 'cosplay':
            pathArray.push({
              category_id: 'cosplay',
              to: `/tin-tuc-cosplay/${news.title}/${news.id}`,
            });
            break;
          default:
            break;
        }
      });
      setPath(pathArray);
    });
  };

  const handleGetMangaNews = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php/manga').then((res) => {
      let randomArray = [];
      let randomNews = [];
      for (let i = 0; i < 6; i++) {
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
      setMangaNews(randomNews);
    });
  };

  const handleGetAnimeNews = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php/anime').then((res) => {
      setAnimeNews(res.data);
    });
  };

  const handleGetCosplayNews = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php/cosplay').then((res) => {
      setCosplayNews(res.data);
    });
  };

  const handleGetCharactersNews = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php/characters').then((res) => {
      setCharactersNews(res.data);
    });
  };

  const handleGetCultureNews = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php/culture').then((res) => {
      setCultureNews(res.data);
    });
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          marginRight: '30px',
          zIndex: 10,
          borderRadius: '100%',
          backgroundColor: '#aaaaaa',
        }}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          marginLeft: '30px',
          zIndex: 10,
          borderRadius: '100%',
          backgroundColor: '#aaaaaa',
        }}
        onClick={onClick}
      />
    );
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <CustomNextArrow className="dark:text-black" />,
    prevArrow: <CustomPrevArrow className="dark:text-black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow className="dark:text-black" />,
    prevArrow: <CustomPrevArrow className="dark:text-black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow className="dark:text-black" />,
    prevArrow: <CustomPrevArrow className="dark:text-black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <DefaultLayout>
      <Helmet>
        <title>Trang Tin Tức Anime Zettai</title>
      </Helmet>
      <div className="py-20 px-8 max-w-[75rem] mx-auto dark:bg-dark-mode-3">
        <section className="mb-10">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xl font-bold dark:text-white">
                <h1>Tin Tức Đề Cử</h1>
              </div>
            </div>

            <Slider {...settings1}>
              {news
                ? news.map((newsItem, index) => {
                    return (
                      <div
                        key={newsItem.id}
                        className="select-none flex-grow flex-shrink-0 basis-full h-[31.25rem] relative bg-gradient-to-b from-white to-[#050404] rounded-lg"
                      >
                        <div className="w-full h-full opacity-80 overflow-hidden">
                          <img
                            className="w-full h-full rounded-lg object-center"
                            src={`http://localhost/anime_news/admin/api/uploads/images/${newsItem.image}`}
                            alt="just_for_you"
                          />
                        </div>
                        <div className="absolute left-4 bottom-4 w-full">
                          <h2 className="max-w-md text-2xl font-bold text-white mb-2 line-clamp-1">{newsItem.title}</h2>
                          {newsItem.category_id === path[index].category_id ? (
                            <Link to={path[index].to}>
                              <button className="text-sm text-white px-2 py-1 bg-read-more-btn rounded-lg cursor-pointer hover:bg-read-more-btn-hover transition-all">
                                Đọc thêm
                              </button>
                            </Link>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    );
                  })
                : ''}
            </Slider>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row mb-10">
          <div className="xl:max-w-[48.5rem] xl:mr-6">
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between mb-4">
                <div className="text-xl font-bold dark:text-white">
                  <h1>Tin Tức Anime</h1>
                </div>

                <div className="sm:w-auto w-full flex items-center justify-between">
                  <Link to="/tin-tuc-anime">
                    <div className="text-sm font-bold cursor-pointer dark:text-white">
                      <span>Xem tất cả</span>
                    </div>
                  </Link>
                </div>
              </div>
              <Slider {...settings2}>
                {animeNews.map((news) => {
                  return (
                    <Link key={news.id} to={`/tin-tuc-anime/${news.title}/${news.id}`}>
                      <SectionPreview data={news} />
                    </Link>
                  );
                })}
              </Slider>
            </div>

            <div className="mb-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between mb-4">
                <div className="text-xl font-bold dark:text-white">
                  <h1>Cosplay</h1>
                </div>

                <div className="sm:w-auto w-full flex items-center justify-between dark:text-white">
                  <Link to="/tin-tuc-cosplay">
                    <div className="text-sm font-bold cursor-pointer">
                      <span>Xem tất cả</span>
                    </div>
                  </Link>
                </div>
              </div>
              <Slider {...settings2}>
                {cosplayNews.map((news) => {
                  return (
                    <Link key={news.id} to={`/tin-tuc-cosplay/${news.title}/${news.id}`}>
                      <SectionPreview data={news} />
                    </Link>
                  );
                })}
              </Slider>
            </div>
          </div>

          <PopularLayout data={mangaNews} title="Tin Tức Manga" />
        </section>

        <section className="mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between mb-4">
            <div className="text-xl font-bold dark:text-white">
              <h1>Tin Tức Nhân Vật</h1>
            </div>
            <div className="sm:w-auto w-full flex items-center justify-between dark:text-white">
              <Link to="/tin-tuc-nhan-vat">
                <div className="text-sm font-bold cursor-pointer">
                  <span>Xem tất cả</span>
                </div>
              </Link>
            </div>
          </div>

          <Slider {...settings3}>
            {charactersNews.map((news) => {
              return (
                <Link key={news.id} to={`/tin-tuc-nhan-vat/${news.title}/${news.id}`}>
                  <SectionPreview data={news} />
                </Link>
              );
            })}
          </Slider>
        </section>

        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between mb-4">
            <div className="text-xl font-bold dark:text-white">
              <h1>Văn Hoá Nhật Bản</h1>
            </div>
            <div className="sm:w-auto w-full flex items-center justify-between dark:text-white">
              <Link to="/van-hoa-nhat-ban">
                <div className="text-sm font-bold cursor-pointer">
                  <span>Xem tất cả</span>
                </div>
              </Link>
            </div>
          </div>

          <Slider {...settings3}>
            {cultureNews.map((news) => {
              return (
                <Link key={news.id} to={`/van-hoa-nhat-ban/${news.title}/${news.id}`}>
                  <SectionPreview data={news} />
                </Link>
              );
            })}
          </Slider>
        </section>
      </div>
    </DefaultLayout>
  );
}

export default Home;
