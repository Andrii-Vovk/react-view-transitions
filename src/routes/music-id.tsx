import { useParams } from "react-router-dom";
import musicList from "../music-list";

const MusicId = () => {
  const params = useParams();

  const music = musicList.find((music) => music.id === Number(params.id));

  if (!music) {
    return (
      <div className="h-full min-h-screen bg-slate-900 flex flex-col gap-3 pb-8">
        <h1 className="text-white font-sans text-3xl my-8 mx-auto">Music List</h1>
        <p className="text-white font-sans text-3xl my-8 mx-auto">Music not found</p>
      </div>
    );
  }

  return (
    <div className="h-full min-h-screen bg-slate-900 flex flex-col items-center gap-3 pb-8">
      <h1 className="text-white font-sans text-3xl my-8 mx-auto">Song</h1>
      <img className="w-96 h-96 rounded-sm object-cover" src={music.img} alt={music.name} />
      <div className="flex flex-col items-center">
        <h3 className="text-white font-sans text-3xl mb-1">{music.name}</h3>
        <p className="text-sky-400 font-sans text-xl">{music.artist}</p>
        <p className="text-sky-200 font-sans text-xl max-w-[1000px] mt-3">{music.description}</p>
      </div>
    </div>
  );
};

export default MusicId;
