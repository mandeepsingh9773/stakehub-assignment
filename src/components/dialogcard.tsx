"use client";

import React, { useEffect, useState } from "react";

interface Quote {
  character: string;
  series: string;
  text: string;
}

const DialogueCard: React.FC = () => {
  const [dialogues, setDialogues] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://wordsapi-nkj3.onrender.com/dialogues",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data);
        const dialoguesData = data || [];
        setDialogues(dialoguesData);
        console.log(dialoguesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="px-8 mb-14">
        <h1 className="text-3xl font-bold mt-12 mb-8 text-center">Dialogues</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dialogues.map((dialogues, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-xl p-8">
              <p className="font-bold uppercase mb-2">{dialogues.character}</p>
              <p className="uppercase mb-4">{dialogues.series}</p>
              <p className="text-xl font-light italic text-black">
                {dialogues.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DialogueCard;
