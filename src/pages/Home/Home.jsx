import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jfyImage from '../../assets/images/image-justForYou.jpg';
import navbarImage from '../../assets/images/image-navbar.jpg';

function Home() {
  return (
    <section className="py-20 px-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-bold">
            <h1>Just For You</h1>
          </div>

          <div className="flex items-center ">
            <div className="p-2 cursor-pointer">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="p-2 cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="flex-grow flex-shrink-0 basis-full h-[31.25rem] relative bg-gradient-to-b from-white to-[#050404] rounded-lg">
            <div className="w-full h-full opacity-80 overflow-hidden">
              <img className="w-full h-full rounded-lg object-cover" src={jfyImage} alt="just for you" />
            </div>
            <div className="absolute left-4 bottom-4 w-full">
              <h1 className="text-2xl font-bold text-white mb-2">The Evangelion Files</h1>
              <button className="text-sm text-white px-2 py-1 bg-read-more-btn rounded-lg cursor-pointer hover:bg-read-more-btn-hover transition-all">
                Read more
              </button>
            </div>
          </div>

          <div className="flex-grow flex-shrink-0 basis-full h-[31.25rem] relative bg-gradient-to-b from-white to-[#050404] rounded-lg">
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

          <div className="flex-grow flex-shrink-0 basis-full h-[31.25rem] relative bg-gradient-to-b from-white to-[#050404] rounded-lg">
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
        </div>
      </div>
    </section>
  );
}

export default Home;
