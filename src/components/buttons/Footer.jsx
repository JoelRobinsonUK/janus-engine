import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const [source, setSource] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let endpoint = pathname.split("/").pop();
    console.log(endpoint);

    if (endpoint === "") {
      setSource(null);
    }

    if (endpoint === "0") {
      setSource("play");
    }

    if (endpoint === "credits") {
      setSource("credits");
    }
  }, [pathname]);

  const setAudio = (a, s) => {
    setSource(s);
    a.currentTime = null;
  };

  return (
    <footer className="text-antiflash-200 text-center p-4 bg-notblack-500 flex flex-col lg:flex-row items-center gap-4">
      {source === "play" && (
        <audio
          className="rounded-full"
          src="/sounds/storyAmbient.mp3"
          controls
          autoPlay
        ></audio>
      )}
      {source === "credits" && (
        <audio
          className="rounded-full"
          src="/sounds/credits.mp3"
          controls
          autoPlay
          onEnded={() => navigate("/play/0")}
        ></audio>
      )}
      <div className="grow"></div>
      <h6 className="">Copyright &copy; Joel Robinson 2024</h6>
      <a href="https://github.com/JoelRobinsonUK/janus-engine">
        <FontAwesomeIcon className="text-2xl" icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
