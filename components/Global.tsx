import {
  selectCountry,
  selectLanguage,
  updateLanguage,
  updateCountry,
} from "@/lib/state/features/global/globalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/state/features/hooks";

export default function Global() {
  const dispatch = useAppDispatch();
  const language = useAppSelector(selectLanguage);
  const country = useAppSelector(selectCountry);

  const handleClickUpdateLanguage = () => {
    dispatch(updateLanguage("en-US"));
  };
  const handleClickUpdateCountry = () => {
    dispatch(updateCountry("US"));
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
    </div>
  );
}
