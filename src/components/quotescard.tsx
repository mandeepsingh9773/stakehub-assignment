"use client";

import React, { useEffect, useState } from "react";

interface Quote {
  author: string;
  text: string;
}

const Card: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [filteredAuthor, setFilteredAuthor] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://wordsapi-nkj3.onrender.com/quotes",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        const quotesData = data.quotes || [];
        setQuotes(quotesData);
        const authorsData = data.authors || [];
        setAuthors(authorsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (author: string) => {
    setFilteredAuthor(author);
  };

  const filteredQuotes = filteredAuthor
    ? quotes.filter((quote) => quote.author === filteredAuthor)
    : quotes;

  return (
    <>
      <h1 className="text-3xl font-bold mt-8 mb-8 text-center">Quotes</h1>
      <div className="mb-8">
        <h2 className="block text-gray-700 text-sm font-bold mb-2">
          Filter by Author:
        </h2>
        <select
          className="border rounded-lg p-2"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">All Authors</option>
          {authors.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {filteredQuotes.map((quote, index) => (
          <div key={index} className="rounded-lg shadow-xl p-8 bg-gray-100">
            <p className="font-bold uppercase mb-4">{quote.author}</p>
            <p className="text-xl font-light italic text-black">{quote.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
// pages/index.tsx

// import { useEffect, useState } from "react";
// import { GetServerSideProps, NextPage } from "next";

// interface Quote {
//   author: string;
//   text: string;
// }

// interface CardProps {
//   quotes: Quote[];
//   authors: string[];
// }

// const Card: NextPage<CardProps> = ({ quotes, authors }) => {
//   let filteredAuthor: string | null = null;

//   const handleFilter = (author: string) => {
//     filteredAuthor = author;
//   };

//   const filteredQuotes = filteredAuthor
//     ? quotes.filter((quote) => quote.author === filteredAuthor)
//     : quotes;

//   return (
//     <>
//       <h1 className="text-3xl font-bold mt-8 mb-8 text-center">Quotes</h1>
//       <div className="mb-8">
//         <h2 className="block text-gray-700 text-sm font-bold mb-2">
//           Filter by Author:
//         </h2>
//         <select
//           className="border rounded-lg p-2"
//           onChange={(e) => handleFilter(e.target.value)}
//         >
//           <option value="">All Authors</option>
//           {authors.map((author, index) => (
//             <option key={index} value={author}>
//               {author}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {filteredQuotes.map((quote, index) => (
//           <div key={index} className="rounded-lg shadow-xl p-8 bg-gray-100">
//             <p className="font-bold uppercase mb-4">{quote.author}</p>
//             <p className="text-xl font-light italic text-black">{quote.text}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export const getServerSideProps: GetServerSideProps<CardProps> = async () => {
//   try {
//     const response = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
//     const data = await response.json();
//     const quotesData: Quote[] = data.quotes || [];
//     const authorsData: string[] = data.authors || [];

//     return {
//       props: {
//         quotes: quotesData,
//         authors: authorsData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         quotes: [],
//         authors: [],
//       },
//     };
//   }
// };


// export default Card;
