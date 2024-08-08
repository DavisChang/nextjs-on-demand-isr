import React, { useEffect } from "react";

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

  return <button>button2</button>;
}
