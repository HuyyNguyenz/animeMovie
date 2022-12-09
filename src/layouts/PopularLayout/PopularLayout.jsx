import { Link } from 'react-router-dom';
import PopularPreview from '../components/PopularPreview/PopularPreview';

function PopularLayout({ data, title }) {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="text-xl font-bold mb-4 dark:text-white">
        <h1>{title}</h1>
      </div>

      {data.map((item) => {
        let path = '';
        switch (item.category_id) {
          case 'anime':
            path = 'tin-tuc-anime';
            break;
          case 'characters':
            path = 'tin-tuc-nhan-vat';
            break;
          case 'manga':
            path = 'tin-tuc-manga';
            break;
          case 'culture':
            path = 'van-hoa-nhat-ban';
            break;
          case 'cosplay':
            path = 'tin-tuc-cosplay';
            break;
          default:
            break;
        }
        return (
          <Link key={item.id} to={`/${path}/${item.title}/${item.id}`}>
            <PopularPreview data={item} />
          </Link>
        );
      })}
    </div>
  );
}

export default PopularLayout;
