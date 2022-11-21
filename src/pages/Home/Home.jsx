import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionPreview from '../../layouts/components/SectionPreview/SectionPreview';
import PopularPreview from '../../layouts/components/PopularPreview/PopularPreview';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    handleGetRandomNews();
  }, []);

  const handleGetRandomNews = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php').then((res) => {
      let newsRandom = [];
      let randomArray = [];
      for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * res.data.length);
        randomArray.push(random);
      }

      for (let j = 0; j < randomArray.length; j++) {
        for (let k = 1; k < randomArray.length; k++) {
          if (randomArray[j] === randomArray[k]) {
            randomArray.pop(randomArray[j]);
          }
        }
      }
      // newsRandom.push(res.data[random]);
      // setNews(newsRandom);
      console.log(randomArray);
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
          backgroundColor: '#000000',
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
          backgroundColor: '#000000',
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
              ? news.map((newsItem) => {
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
                        <button className="text-sm text-white px-2 py-1 bg-read-more-btn rounded-lg cursor-pointer hover:bg-read-more-btn-hover transition-all">
                          Read more
                        </button>
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
              {/* <SectionPreview />
              <SectionPreview />
              <SectionPreview />
              <SectionPreview /> */}
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
              {/* <SectionPreview />
              <SectionPreview />
              <SectionPreview />
              <SectionPreview /> */}
            </Slider>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start">
          <div className="text-xl font-bold mt-1 mb-4 dark:text-white">
            <h1>Tin Tức Manga</h1>
          </div>

          <PopularPreview />
          <PopularPreview />
          <PopularPreview />
          <PopularPreview />
          <PopularPreview />
          <PopularPreview />
          <PopularPreview />
        </div>
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
          {/* <SectionPreview />
          <SectionPreview />
          <SectionPreview />
          <SectionPreview />
          <SectionPreview />
          <SectionPreview /> */}
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
          {/* <SectionPreview />
          <SectionPreview />
          <SectionPreview />
          <SectionPreview />
          <SectionPreview />
          <SectionPreview /> */}
        </Slider>
      </section>
    </div>
  );
}

export default Home;
