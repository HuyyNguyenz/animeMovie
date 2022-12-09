import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import DefaultLayout from '../../layouts/DefaultLayout';
import SectionPreview from '../../layouts/components/SectionPreview';

function CultureNews() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php/culture').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <DefaultLayout>
      <section>
        <div className="py-20 px-8 max-w-[75rem] mx-auto dark:text-white">
          <div className="text-2xl font-bold mb-4">
            <h1>Văn Hoá Nhật Bản</h1>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {data
                ? Array.from(data).map((item) => (
                    <Link key={item.id} to={'/van-hoa-nhat-ban/' + item.title + '/' + item.id}>
                      <SectionPreview data={item} width="34.5rem" mb="6" />
                    </Link>
                  ))
                : ''}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default CultureNews;
