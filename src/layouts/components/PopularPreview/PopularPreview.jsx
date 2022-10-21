import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PopularPreview() {
  return (
    <div className="w-full flex items-center bg-section-bg-color p-5 my-2 rounded-lg cursor-pointer">
      <div className="block w-20 h-20">
        <img
          className="w-full h-full rounded-lg hover:opacity-80 transition-all"
          src="https://demo.ramsthemes.com/projects/zettai-bs/wp-content/uploads/2021/09/weathering-1_x4b4.h720-450x450.jpg"
          alt="popular-img"
        />
      </div>
      <div className="flex-1 ml-6">
        <div className="text-base font-bold ">
          <h2>Weathering With You: What A Mistake!</h2>
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
