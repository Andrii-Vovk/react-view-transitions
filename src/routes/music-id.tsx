import { useNavigate, useParams } from "react-router-dom";
import musicList from "../music-list";
import { transitionHelper } from "../transition-helpers";
import { flushSync } from "react-dom";
import { sendNotification } from "../notification-helpers";

const MusicId = () => {
  const params = useParams();
  const navigate = useNavigate();

  const animatedNavigate = () => {
    transitionHelper({
      updateDOM() {
        flushSync(() => {
          navigate("/");
        });
      },
    });
  };

  const music = musicList.find((music) => music.id === Number(params.id));

  const notifyMe = () => {
    sendNotification(music?.name || "", music?.artist || "");
  };

  if (!music) {
    return (
      <div className="flex flex-col h-full min-h-screen gap-3 pb-8 bg-slate-900">
        <h1 className="mx-auto my-8 font-sans text-3xl text-white">Music List</h1>
        <p className="mx-auto my-8 font-sans text-3xl text-white">Music not found</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center h-full min-h-screen gap-3 pb-8 bg-slate-900 root-transition">
      <button
        type="button"
        onClick={() => animatedNavigate()}
        className="absolute w-12 h-12 p-2 text-2xl text-white transition-opacity rounded-full top-6 left-8 bg-slate-800 hover:opacity-70"
      >
        ←
      </button>
      <h1 className="mx-auto my-8 font-sans text-3xl text-white">Song</h1>

      <img
        className="object-cover rounded-sm w-96 h-96 banner-img"
        src={music.img}
        alt={music.name}
        style={{ viewTransitionName: `music-${music.id}`, contain: "layout" }}
      />
      <div className="flex flex-col items-center">
        <h3 className="mb-1 font-sans text-3xl text-white">{music.name}</h3>
        <p className="font-sans text-xl text-sky-400">{music.artist}</p>
        <p className="text-sky-200 font-sans text-xl max-w-[1000px] mt-3">{music.description}</p>
        <button
          className="mt-3 font-sans text-lg text-white transition-opacity hover:opacity-80"
          type="button"
          onClick={notifyMe}
        >
          Notify me →
        </button>
      </div>
    </div>
  );
};

export default MusicId;
