import { useState, useEffect } from 'react';
import axios from 'axios';

import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import SectionPreview from '../../layouts/components/SectionPreview';

function AnimeNews() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost/anime_news/admin/api/controller/news.php/7').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <DefaultLayout>
      <section>
        <div className="py-20 px-8 max-w-[75rem] mx-auto dark:text-white">
          <div className="text-2xl font-bold mb-4">
            <h1>Tin Tức Anime</h1>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
              {data
                ? Array.from(data).map((item) => <SectionPreview data={item} key={item.id} width="34.5rem" mb="6" />)
                : ''}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default AnimeNews;
