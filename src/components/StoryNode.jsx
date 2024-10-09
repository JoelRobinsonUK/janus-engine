import { Link, useParams } from "react-router-dom";
import { storyNodes } from "../StoryContext";

const StoryNode = () => {
  const { id } = useParams();

  const storyNode = storyNodes[id];

  return (
    <div className="w-3/6 grow bg-antiflash-200 rounded-xl grid grid-cols-6 overflow-hidden">
      <div className="col-span-2">
        <img className="h-full object-cover" src={storyNode.img} alt="" />
      </div>
      <div className="col-span-4 px-8 py-8 flex flex-col">
        <h2 className="text-2xl text-center py-8 font-heading font-semibold">
          {storyNode.title}
        </h2>
        {storyNode.body.map((text) => (
          <p className="pb-4">{text}</p>
        ))}
        <div className="grow flex items-end gap-2">
          {storyNode.options.map((option) => (
            <Link
              to={"/gate/" + option.id}
              className="grow bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center"
            >
              {option.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryNode;
