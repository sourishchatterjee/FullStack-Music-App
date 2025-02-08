// import { Song } from "@/types";
// import usePlayer from "./usePlayer";

// import useAuthModal from "./useAuthModal";
// import { useUser } from "@supabase/auth-helpers-react";

// const useOnPlay =(songs:Song[])=>{

//     const player =usePlayer();
//     const authModal= useAuthModal();
//     const{user} =useUser();



//     const onPlay= (id:String)=>{
//         if(!user){
//             return authModal.onOpen();
//         }

//         player.setId(id);
//         player.setIds(songs.map((song)=>song.id))
//     }
//     return onPlay
// }
// export default useOnPlay;




// import { Song } from "@/types";
// import usePlayer from "./usePlayer";
// import useAuthModal from "./useAuthModal";
// import { useUser } from "@supabase/auth-helpers-react";

// const useOnPlay = (songs: Song[]) => {
//   const player = usePlayer();
//   const authModal = useAuthModal();
//   const user = useUser();

//   const onPlay = (id: string) => { 
//     if (!user) {
//       return authModal.onOpen();
//     }

//     player.setId(id); // Convert id to string
//     player.setIds(songs.map((song) => song.id)); // Convert all ids to string
//   };

//   return onPlay;
// };

// export default useOnPlay;



import { Song } from "@/types";
import usePlayer from "@/Store/usePlayer";
import useAuthModal from "@/Store/useAuthModal";
import { useUser } from "@supabase/auth-helpers-react";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const user = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    // Reset current player state
    player.reset();
    
    // Set new song and playlist
    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;