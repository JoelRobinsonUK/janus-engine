import { Link } from "react-router-dom";

const StartNode = () => {
  return (
    <div className="grow flex items-stretch">
      <div className="max-w-screen-pp bg-teal-300">
        <img
          className="h-full object-cover"
          src="https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg"
          alt=""
        />
      </div>
      <div className="grow px-8 flex flex-col max-w-prose justify-center gap-8">
          <h2 className="text-2xl font-heading font-semibold">Gate 000</h2>
          <p>
            Pilot, welcome to the the Janus Engine, a mechanism used by the
            earliest civilisation to guide the development of younger races. You
            have been assigned the human race, your goal is to guide them to the
            end of the 3rd millenium.
          </p>
          <div className="flex">
            <Link
              to={"/gate/1"}
              className="grow bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center"
            >
              Begin
            </Link>
          </div>
      </div>
    </div>
  );
};

export default StartNode;
