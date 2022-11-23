import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PopularPreview({ data }) {
  return (
    <div className="w-full flex items-center bg-section-bg-color p-5 mb-4 rounded-lg cursor-pointer dark:bg-dark-mode-4">
      <div className="block w-20 h-20">
        <img
          className="w-full h-full rounded-lg hover:opacity-80 transition-all"
          src={`http://localhost/anime_news/admin/api/uploads/images/${data.image}`}
          alt="popular-img"
        />
      </div>
      <div className="flex-1 ml-6 dark:text-white">
        <div className="text-base font-bold line-clamp-2">
          <h2>{data.title}</h2>
        </div>

        <div className="flex items-center ">
          <div className="mr-1">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="text-sm">
            <span>5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPreview;
