import { Link } from "react-router-dom";
import musicList from "../music-list";

const Root = () => {
  const mappedMusicList = musicList.map((music) => (
    <Link
      key={music.id}
      to={`/music/${music.id}`}
      className="bg-slate-800 rounded-xl flex items-center gap-8 mx-auto w-[600px] hover:opacity-70 transition-opacity"
    >
      <img className="w-36 h-36 rounded-sm object-cover" src={music.img} alt={music.name} />
      <div>
        <h3 className="text-white font-sans text-3xl mb-1">{music.name}</h3>
        <p className="text-sky-400 font-sans text-xl">{music.artist}</p>
      </div>
    </Link>
  ));

  return (
    <div className="h-full min-h-screen bg-slate-900 flex flex-col gap-3 pb-8">
      <h1 className="text-white font-sans text-3xl my-8 mx-auto">Music List</h1>
      {mappedMusicList}
    </div>
  );
};

export default Root;
