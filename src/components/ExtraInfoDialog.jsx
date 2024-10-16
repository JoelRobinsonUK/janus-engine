import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ExtraInfoDialog = ({ id, extra }) => {
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    setDisplay("block");
  }, [id]);

  return (
    <div
      className={
        "lg:absolute lg:bottom-4 right-4 lg-max-w-1/6 bg-antiflash-400 dark:bg-notblack-400 rounded-xl overflow-hidden " +
        display
      }
    >
      <div className="bg-teal-300 p-4 flex text-antiflash-200 items-stretch">
        <h3 className="grow font-heading text-lg font-semibold">
          Historical Context
        </h3>
        <button
          className="underline bg-antiflash-200 text-notblack-300 px-2 rounded-full flex justify-center items-center font-xl"
          onClick={() => setDisplay("hidden")}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <p className="p-6">{extra}</p>
    </div>
  );
};

export default ExtraInfoDialog;
