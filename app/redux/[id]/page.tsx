"use client";

import { useGetQuoteByIdQuery } from "@/lib/state/features/quotes/quotesApiSlice";

export default function ReduxIdPage({ params }: { params: { id: string } }) {
  const { data, isError, isLoading, isSuccess } = useGetQuoteByIdQuery(
    Number(params.id)
  );

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div>
        <h2>Redux With ID: {params.id}</h2>
        <hr />
        <p>id: {data.id}</p>
        <p>author: {data.author}</p>
        <p>quote: {data.quote}</p>
      </div>
    );
  }

  return null;
}
