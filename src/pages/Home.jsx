import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grow flex flex-col justify-center items-center max-w-prose mx-auto gap-8 px-4">
      <h2 className="text-2xl font-heading font-semibold">
        Welcome to the Janus Engine
      </h2>
      <p>
        The Janus Engine is a choose-your-own-adventure web app story originally
        made as a university assignment created in vanilla HTML, CSS, and
        JavaScript. This version leverages React to make it more scalable and
        TailwindCSS to quickly create a responsive design.
      </p>
      <p>
        The story explores the possible future of humanity; and reflects the
        climate nihilistic, space exploration focused worldview I held in 2017.
        I've left the story's original point and message intact, despite feeling
        that an Earth-based future is truly our best bet.
      </p>
      <Link
        replace
        to={"/play/0"}
        className="bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center w-full"
      >
        Play
      </Link>
    </div>
  );
};

export default Home;
