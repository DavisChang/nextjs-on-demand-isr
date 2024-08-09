import {
  selectCountry,
  selectLanguage,
  selectPhotos,
  updateLanguage,
  updateCountry,
  fetchPhotosAsync,
} from "@/lib/state/features/global/globalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/state/features/hooks";

const limitedNumber = 10;
export default function Global() {
  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);
  const country = useAppSelector(selectCountry);
  const photos = useAppSelector(selectPhotos);

  const handleClickUpdateLanguage = () => {
    dispatch(updateLanguage("en-US"));
  };
  const handleClickUpdateCountry = () => {
    dispatch(updateCountry("US"));
  };
  const handleClickAsyncFetch = () => {
    dispatch(fetchPhotosAsync());
  };

  return (
    <div>
      <h3>redux global</h3>
      <p>language: {language}</p>
      <p>country: {country}</p>
      <div>
        <button onClick={handleClickUpdateLanguage}>Update Language</button>
        <button onClick={handleClickUpdateCountry}>Update Country</button>
      </div>
      <hr />
      <h3>redux global async photos</h3>
      <div>
        <button onClick={handleClickAsyncFetch}>Async Fetch Photos</button>
      </div>
      <div>
        <p>photos status: {photos.status}</p>
        {photos.status === "pending" && <p>{photos.status}</p>}
        {photos.status === "succeeded" &&
          !!photos.data.length &&
          photos.data.slice(0, limitedNumber).map((item) => (
            <div key={item.id}>
              <p>title: {item.title}</p>
              <p>url: {item.url}</p>
            </div>
          ))}

        {photos.status === "succeeded" && photos.data.length === 0 && (
          <p>Empty Data</p>
        )}
      </div>
    </div>
  );
}
