import { useEffect, useState } from "react";
import { credits } from "../Credits";

const Credits = () => {
  const [current, setCurrent] = useState(credits[0]);

  useEffect(() => {
    let count = 0;
    setInterval(() => {
      setCurrent(credits[count]);
      count++;
    }, 3000);
  }, []);

  return (
    <div className="bg-credits grow flex flex-col justify-center items-center text-antiflash-200 gap-4">
      {current && (
        <>
          <span className="text-3xl">{current.job}</span>
          <h2 className="text-5xl font-heading font-bold">{current.name}</h2>
        </>
      )}
      <audio src="/sounds/credits.mp3" autoPlay></audio>
    </div>
  );
};

export default Credits;
