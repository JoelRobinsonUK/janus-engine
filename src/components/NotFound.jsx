import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-3/6 grow bg-antiflash-200 rounded-xl grid grid-cols-6 overflow-hidden">
      <div className="col-span-2">
        <img
          className="h-full object-cover"
          src="https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg"
          alt=""
        />
      </div>
      <div className="col-span-4 px-8 py-8 flex flex-col">
        <h2 className="text-2xl text-center py-8 font-heading font-semibold">
          Gate 404
        </h2>
        <p>
          Pilot, the Janus Engine has encountered a critical error.
          <br />
          <br />
          The Continuum Security Service have generated a recovery tunnel for
          you to return to the root of your journey.
        </p>
        <div className="grow flex items-end">
          <Link
            to={"/"}
            className="grow bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center"
          >
            Return to Root
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
