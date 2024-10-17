import { useParams, Link } from "react-router-dom";

const Ending = () => {
  const { id } = useParams();

  return (
    <div className="grow flex flex-col lg:flex-row justify-center items-center mx-auto gap-8 p-4">
      <div className="max-w-sm">
        <img src={"/icons/" + id + "mark.png"} alt="" />
      </div>
      <div className="grow flex flex-col gap-8 max-w-prose">
        <h2 className="text-2xl font-heading font-semibold">
          Pilot Assessment
        </h2>
        {id === "good" && (
          <p>
            Pilot, your efforts to guide humanity into the 3rd Millenium have
            been successful. Humanity is thriving. However you can improve their
            standing if you wish.
          </p>
        )}
        {id === "bad" && (
          <p>
            Pilot, your efforts to guide humanity into the 3rd Millenium have
            proven insufficient. If you wish you can try again, the human
            focused Janus Engine will be reset to Earth year 2018.
          </p>
        )}
        {id === "true" && (
          <p>
            Congratulations, pilot you have led humanity into the 3rd Millenium
            under optimal circumstances. With humanity meeting its alien kin the
            humans can proceed freely. Please terminate you Janus Engine.
          </p>
        )}
        {id !== "true" && (
          <Link
            replace
            to={"/play/0"}
            className="bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center w-full"
          >
            Play Again
          </Link>
        )}
        {id === "true" && (
          <Link
            replace
            to={"/play/credits"}
            className="bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center w-full"
          >
            Terminate
          </Link>
        )}
      </div>
    </div>
  );
};

export default Ending;
