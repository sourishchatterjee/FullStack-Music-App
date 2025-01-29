// import { Song } from "@/types";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";




// const useLoadSong=(song:Song)=>{
// const supabaseClient =useSupabaseClient();

// if(!song){
//     return '';
// }
// const (data:songData)= supabaseClient
// .storage
// .from("songs")
// .getPublicUrl(song.song_path);

// return SongData.publicUrl



// }

// export default useLoadSong



import { Song } from "@/types"; // Make sure this interface is in a separate file
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSong = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return "";
  }

  
  const { data } = supabaseClient
   .storage
    .from("songs") 
    .getPublicUrl(song.song_path); 

  return data.publicUrl; 
};

export default useLoadSong;
