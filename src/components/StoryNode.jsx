import { Link, useNavigate, useParams } from "react-router-dom";
import { storyNodes } from "../StoryContext";
import { useState, useEffect } from "react";
import ExtraInfoDialog from "./ExtraInfoDialog";

const StoryNode = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [storyNode, setStoryNode] = useState();

  useEffect(() => {
    if (id in storyNodes === false) {
      console.log("no key, reroute to 404");
      navigate("/404");
    }

    setStoryNode(storyNodes[id]);
  }, [id]);

  return (
    <>
      {storyNode && (
        <div className="grow bg-antiflash-200 rounded-xl grid grid-cols-6 overflow-hidden items-center">
          <div className="col-span-2">
            <img
              className="h-full object-cover"
              src={"/images/" + storyNode.img}
              alt=""
            />
          </div>
          <div className="col-span-4 px-8">
            <div className="flex flex-col max-w-screen-pl items-stretch gap-8">
              <h2 className="text-2xl font-heading font-semibold">Gate 000</h2>
              {storyNode.body.map((text) => (
                <p className="pb-4">{text}</p>
              ))}
              <div className="grow flex">
                {storyNode.options.map((option) => (
                  <Link
                    replace
                    to={"/gate/" + option.id}
                    className="grow bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center"
                  >
                    {option.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {storyNode.extra && <ExtraInfoDialog id={id} extra={storyNode.extra} />}
      {/* <div className="w-3/6 grow bg-antiflash-200 rounded-xl grid grid-cols-5 overflow-hidden">
        {storyNode && (
          <>
            <div className="col-span-2">
              <img
                className="h-full object-cover"
                src={"/images/" + storyNode.img}
                alt=""
              />
            </div>
            <div className="col-span-3 px-8 py-8 flex flex-col">
              <h2 className="text-2xl text-center py-8 font-heading font-semibold">
                {storyNode.title}
              </h2>
              {storyNode.body.map((text) => (
                <p className="pb-4">{text}</p>
              ))}
              <div className="grow grid grid-cols-2 items-end gap-2">
                {storyNode.options.map((option) => (
                  <Link
                    replace
                    to={"/gate/" + option.id}
                    className="grow bg-peacock-500 rounded-lg text-antiflash-200 py-3 text-center"
                  >
                    {option.text}
                  </Link>
                ))}
              </div>
            </div>
            {storyNode.extra && (
              <ExtraInfoDialog id={id} extra={storyNode.extra} />
            )}
          </>
        )}
      </div> */}
    </>
  );
};

export default StoryNode;
