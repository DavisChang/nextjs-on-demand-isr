import React, { useContext, useEffect } from "react";
import { ThemeContext, useThemeContext } from "../contexts/theme-context";

// Generics
// We have codified a relationship between these two props (countValue, countHistory)
type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export default function Button2<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  const { theme, toggleTheme } = useThemeContext();
  console.log({ theme, toggleTheme });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      // default - data: any
      // use unknown
      .then((data: unknown) => {
        // use Zod or other schema validators
        // run it through Zod
        // const photos = photosSchema(data)
        // do something with the data
      });
  });

  return (
    <div>
      <h4>{theme}</h4>
      <button onClick={() => toggleTheme()}>toggle theme</button>
      <button>button2</button>
      <div>
        <p>{`countValue: ${countValue}, type: ${typeof countValue}`}</p>
      </div>
    </div>
  );
}
