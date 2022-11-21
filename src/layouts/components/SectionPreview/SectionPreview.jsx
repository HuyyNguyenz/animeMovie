import userImage from '../../../assets/images/user.png';

function SectionPreview({ width, mb, data }) {
  return (
    <div
      className={
        width
          ? `xl:max-w-[${width}] bg-section-bg-color p-5 rounded-lg cursor-pointer dark:bg-dark-mode-4 mb-${mb}`
          : 'xl:max-w-[24.25rem] sm:mr-4 bg-section-bg-color p-5 rounded-lg cursor-pointer dark:bg-dark-mode-4'
      }
    >
      <div className="hover:opacity-80 transition-all mb-4">
        <img
          className="rounded-lg object-cover h-80 w-full"
          src={`http://localhost/anime_news/admin/api/uploads/images/${data.image}`}
          alt="section-img"
        />
      </div>
      <div className="flex flex-col items-start dark:text-white">
        <div className="text-sm my-2">
          <span>{data.date_posted}</span>
        </div>

        <div className="text-xl font-bold my-2">
          <h2>{data.title}</h2>
        </div>

        <div className="text-base my-2 line-clamp-3">
          <h2>{data.short_description}</h2>
        </div>
      </div>

      <div className="flex items-center my-2">
        <div className="mr-4">
          <img className="rounded-full w-8 h-8" src={userImage} alt="author" />
        </div>

        <div className="text-sm font-bold dark:text-white">
          <h3>{data.author}</h3>
        </div>
      </div>
    </div>
  );
}

export default SectionPreview;
