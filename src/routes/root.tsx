import { useNavigate } from "react-router-dom";
import musicList from "../music-list";
import { twMerge } from "tailwind-merge";
import { transitionHelper } from "../transition-helpers";
import { flushSync } from "react-dom";

const Root = () => {
  const navigate = useNavigate();

  const animatedNavigate = (id: number) => {
    transitionHelper({
      updateDOM() {
        flushSync(() => {
          navigate(`/music/${id}`);
        });
      },
    });
  };

  const mappedMusicList = musicList.map((music) => (
    <button
      type="button"
      key={music.id}
      onClick={() => animatedNavigate(music.id)}
      className="bg-slate-800 rounded-xl flex items-center gap-8 mx-auto w-[600px] hover:opacity-70 transition-opacity"
    >
      <img
        className={twMerge("w-36 h-36 rounded-sm object-cover")}
        style={{ viewTransitionName: `music-${music.id}`, contain: "layout" }}
        src={music.img}
        alt={music.name}
      />
      <div className="flex flex-col items-start">
        <h3 className="mb-1 font-sans text-3xl text-white">{music.name}</h3>
        <p className="font-sans text-xl text-sky-400">{music.artist}</p>
      </div>
    </button>
  ));

  return (
    <div className="flex flex-col h-full min-h-screen gap-3 pb-8 bg-slate-900 root-transition">
      <h1 className="mx-auto my-8 font-sans text-3xl text-white">Music List</h1>
      {mappedMusicList}
    </div>
  );
};

export default Root;
