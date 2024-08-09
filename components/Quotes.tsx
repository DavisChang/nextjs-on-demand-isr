import {
  useGetQuotesQuery,
  useAddNewQuoteMutation,
} from "@/lib/state/features/quotes/quotesApiSlice";
import { useState } from "react";
import Link from "next/link";
import { getErrorMessage } from "@/utils/getErrorMessage";
const options = [5, 10, 20, 30];

export const Quotes = () => {
  const [numberOfQuotes, setNumberOfQuotes] = useState(10);
  // Using a query hook automatically fetches data and returns query values
  const { data, isError, isLoading, isSuccess } =
    useGetQuotesQuery(numberOfQuotes);
  const [
    addNewQuote,
    {
      data: addNewQuoteData,
      error: addNewQuoteError,
      isLoading: addNewQuoteIsLoading,
    },
  ] = useAddNewQuoteMutation();

  const handleOnClickAddQuote = async () => {
    console.log("handleOnClickAddQuote");
    try {
      console.log("handleOnClickAddQuote:", {
        addNewQuoteData,
        addNewQuoteError,
        addNewQuoteIsLoading,
      });
      await addNewQuote({ author: "author", quote: "quote" });
    } catch (error: unknown) {
      const errorMsg = getErrorMessage(error);
      console.log("errorMsg:", errorMsg);
    }
  };

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
        <h3>RTK Query - Select the Quantity of Quotes to Fetch</h3>
        <div>
          <button onClick={handleOnClickAddQuote}>create quote</button>
        </div>
        <select
          value={numberOfQuotes}
          onChange={(e) => {
            setNumberOfQuotes(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {data.quotes.map(({ author, quote, id }) => (
          <blockquote key={id}>
            <Link href={`/redux/${id}`}>&ldquo;{quote}&rdquo;</Link>
            <footer>
              <cite>{author}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    );
  }

  return null;
};
