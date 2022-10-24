import PopularPreview from '../components/PopularPreview/PopularPreview';

function PopularLayout() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="text-xl font-bold mt-1 mb-4 dark:text-white">
        <h1>Popular reads</h1>
      </div>

      <PopularPreview />
      <PopularPreview />
      <PopularPreview />
      <PopularPreview />
      <PopularPreview />
      <PopularPreview />
      <PopularPreview />
    </div>
  );
}

export default PopularLayout;
