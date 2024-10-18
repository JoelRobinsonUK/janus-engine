import { useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

const SoundToggle = () => {
  const [mute, setMute] = useState(false);

  const handleMute = () => {
    const audio = document.querySelector("audio");
    console.log(audio.getAttribute("muted"));

    if (!audio) return;

    setMute(audio.getAttribute("muted") === true ? false : true);

    audio.setAttribute("muted", mute);
  };

  return (
    <button
      onClick={(e) => handleMute()}
      className="bg-antiflash-200 dark:bg-notblack-300 text-notblack-300 dark:text-antiflash-200 h-full aspect-square rounded-full hover:animate-wiggle flex justify-center items-center"
    >
      {mute && <SpeakerWaveIcon className="size-6" />}
      {!mute && <SpeakerXMarkIcon className="size-6" />}
    </button>
  );
};

export default SoundToggle;
