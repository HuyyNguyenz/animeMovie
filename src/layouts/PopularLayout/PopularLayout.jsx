import { Link } from 'react-router-dom';
import PopularPreview from '../components/PopularPreview/PopularPreview';

function PopularLayout({ data, title }) {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="text-xl font-bold mb-4 dark:text-white">
        <h1>{title}</h1>
      </div>

      {data.map((item) => {
        return (
          <Link key={item.id} to={`/tin-tuc-manga/${item.title}/${item.id}`}>
            <PopularPreview data={item} />
          </Link>
        );
      })}
    </div>
  );
}

export default PopularLayout;
