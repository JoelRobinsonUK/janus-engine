import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grow bg-antiflash-200 flex items-stretch">
      <div className="max-w-screen-pp bg-teal-300">
        <img
          className="h-full object-cover"
          src="https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo.jpg"
          alt=""
        />
      </div>
      <div className="grow px-8 flex flex-col max-w-prose justify-center gap-8">
          <h2 className="text-2xl font-heading font-semibold">Gate 404</h2>
          <p>
            Pilot, the Janus Engine has encountered a critical error.
            <br /><br />
            The emergency singularity will return you to the causal root
          </p>
          <div className="flex">
            <Link
              to={"/"}
              className="grow bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center"
            >
              Return to Start
            </Link>
          </div>
      </div>
    </div>
  );
};

export default NotFound;
