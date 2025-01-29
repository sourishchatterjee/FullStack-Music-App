"use client";


import useGetSongById from "@/Store/useGetSongById";
import useLoadSongUrl from "@/Store/useLoadSongUrl";
import usePlayer from "@/Store/usePlayer";
import PlayerContent from "./PlayerContent";



function Player() {

    const player =usePlayer();
    const {song} = useGetSongById(player.activeId)

    const songUrl=useLoadSongUrl(song!);


    if(!song|| !songUrl|| !player.activeId){

        return null;
    }


  return (
    <div  className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4" >
        
        <PlayerContent
        song={song}
        key={songUrl}
        songUrl={songUrl}

        
        />
        
    </div>
  )
}

export default Player