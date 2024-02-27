"use client";

import React, { useEffect, useState } from "react";

interface Quote {
  origin: string;
  text: string;
}

const ProverbCard: React.FC = () => {
  const [proverbs, setProverbs] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://wordsapi-nkj3.onrender.com/proverbs",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data);
        const proverbsData = data || [];
        setProverbs(proverbsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="px-8 mb-14">
        <h1 className="text-3xl font-bold mt-12 mb-8 text-center">Proverbs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proverbs.map((proverbs, index) => (
            <div key={index} className="bg-gray-100 rounded-xl shadow-lg p-8">
              <p className="font-bold uppercase mb-4">{proverbs.origin}</p>
              <p className="text-xl font-light italic text-black">
                {proverbs.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProverbCard;
