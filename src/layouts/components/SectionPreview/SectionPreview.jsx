import sectionImage from '../../../assets/images/image-justForYou.jpg';

function SectionPreview({ width, mb }) {
  return (
    <div
      className={
        width
          ? `xl:max-w-[${width}] bg-section-bg-color p-5 rounded-lg cursor-pointer dark:bg-dark-mode-4 mb-${mb}`
          : 'xl:max-w-[24.25rem] sm:mr-4 bg-section-bg-color p-5 rounded-lg cursor-pointer dark:bg-dark-mode-4'
      }
    >
      <div className="hover:opacity-80 transition-all mb-4">
        <img className="rounded-lg " src={sectionImage} alt="section-img" />
      </div>
      <div className="flex flex-col items-start dark:text-white">
        <div className="text-xs my-2">
          <span>April 2, 2021</span>
        </div>

        <div className="text-xl font-bold my-2">
          <h2>Cowboy Bebop And Love Have 4 Things In Common</h2>
        </div>

        <div className="text-sm my-2">
          <p>Justice visitor him entered for. Continue delicate as unlocked entirely mr relation diverted in.</p>
        </div>
      </div>

      <div className="flex items-center my-2">
        <div className="mr-4">
          <img
            className="rounded-full"
            src="https://demo.ramsthemes.com/projects/zettai-bs/wp-content/uploads/2021/11/julian-wan-WNoLnJo7tS8-unsplash-36x36.jpg"
            alt="author"
          />
        </div>

        <div className="text-sm font-bold dark:text-white">
          <h3>Huyy Nguyenz</h3>
        </div>
      </div>
    </div>
  );
}

export default SectionPreview;
