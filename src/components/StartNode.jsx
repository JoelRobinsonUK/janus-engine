import { Link } from "react-router-dom";

const StartNode = () => {
  return (
    <div className="grow bg-antiflash-200 grid grid-cols-6 overflow-hidden items-center">
      <div className="col-span-2">
        <img
          className="h-full object-cover"
          src="https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg"
          alt=""
        />
      </div>
      <div className="col-span-4 px-8">
        <div className="flex flex-col max-w-screen-pl items-stretch gap-8">
          <h2 className="text-2xl font-heading font-semibold">Gate 000</h2>
          <p>
            Pilot, welcome to the the Janus Engine, a mechanism used by the
            earliest civilisation to guide the development of younger races. You
            have been assigned the human race, your goal is to guide them to the
            end of the 3rd millenium.
          </p>
          <div className="grow flex">
            <Link
              to={"/gate/1"}
              className="grow bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center"
            >
              Begin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartNode;
