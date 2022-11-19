import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import jfyImage from '../../assets/images/image-justForYou.jpg';
import navbarImage from '../../assets/images/image-navbar.jpg';
import { useEffect } from 'react';
import SectionPreview from '../../layouts/components/SectionPreview/SectionPreview';
import PopularPreview from '../../layouts/components/PopularPreview/PopularPreview';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    const prevList = document.querySelectorAll('.slick-prev');
    const nextList = document.querySelectorAll('.slick-next');
    const prevBtnList = document.querySelectorAll('.prev-btn');
    const nextBtnList = document.querySelectorAll('.next-btn');

    Array.from(prevList).forEach((prev) => {
      prev.style.display = 'none';
    });

    Array.from(nextList).forEach((next) => {
      next.style.display = 'none';
    });

    Array.from(prevBtnList).forEach((prevBtn, index) => {
      prevBtn.addEventListener('click', () => {
        prevList[index].click();
      });
    });

    Array.from(nextBtnList).forEach((nextBtn, index) => {
      nextBtn.addEventListener('click', () => {
        nextList[index].click();
      });
    });
  }, []);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
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

            <div className="flex items-center dark:text-white">
              <div className="prev-btn p-2 cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="next-btn p-2 cursor-pointer">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>

          <Slider {...settings1}>
            <div className="select-none flex-grow flex-shrink-0 basis-full h-[31.25rem] relative bg-gradient-to-b from-white to-[#050404] rounded-lg">
              <div className="w-full h-full opacity-80 overflow-hidden">
                <img className="w-full h-full rounded-lg object-cover" src={jfyImage} alt="just for you" />
              </div>
              <div className="absolute left-4 bottom-4 w-full">
                <h2 className="text-2xl font-bold text-white mb-2">The Evangelion Files</h2>
                <button className="text-sm text-white px-2 py-1 bg-read-more-btn rounded-lg cursor-pointer hover:bg-read-more-btn-hover transition-all">
                  Read more
                </button>
              </div>
            </div>

            <div className="select-none flex-grow flex-shrink-0 basis-full h-[31.25rem] relative bg-gradient-to-b from-white to-[#050404] rounded-lg">
              <div className="w-full h-full opacity-80 overflow-hidden">
                <img className="w-full h-full rounded-lg object-cover" src={navbarImage} alt="just for you" />
              </div>
              <div className="absolute left-4 bottom-4 w-full">
                <h1 className="text-2xl font-bold text-white mb-2">The Evangelion</h1>
                <button className="text-sm text-white px-2 py-1 bg-read-more-btn rounded-lg cursor-pointer hover:bg-read-more-btn-hover transition-all">
                  Read more
                </button>
              </div>
            </div>

            <div className="select-none flex-grow flex-shrink-0 basis-full h-[31.25rem] relative bg-gradient-to-b from-white to-[#050404] rounded-lg">
              <div className="w-full h-full opacity-80 overflow-hidden">
                <img className="w-full h-full rounded-lg object-cover" src={jfyImage} alt="just for you" />
              </div>
              <div className="absolute left-4 bottom-4 w-full">
                <h1 className="text-2xl font-bold text-white mb-2">The Files</h1>
                <button className="text-sm text-white px-2 py-1 bg-read-more-btn rounded-lg cursor-pointer hover:bg-read-more-btn-hover transition-all">
                  Read more
                </button>
              </div>
            </div>
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

                <div className="flex items-center dark:text-white">
                  <div className="prev-btn p-2 cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <div className="next-btn p-2 cursor-pointer">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
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

                <div className="flex items-center ">
                  <div className="prev-btn p-2 cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <div className="next-btn p-2 cursor-pointer">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
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

            <div className="flex items-center ">
              <div className="prev-btn p-2 cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="next-btn p-2 cursor-pointer">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
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

            <div className="flex items-center ">
              <div className="prev-btn p-2 cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="next-btn p-2 cursor-pointer">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
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
