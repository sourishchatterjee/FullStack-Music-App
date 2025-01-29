// "use client"
// import MediaItem from "@/components/MediaItem"
// import {Song} from "@/types"



// interface  SearchContentProps{
//     songs:Song[]
// }



// const SearchContent:React.FC<SearchContentProps> =({songs})=>{
//     if(songs.length ===0){
//         return(
//             <div
//             className="flex flex-col gap-y-2 w-full px-6 text-neutral-400"
//             >
//                 No Songs found.
//             </div>
//         )
//     }
//     return (
//         <div className="flex flex-col gap-y-2 w-full px-6">
//         {songs.map((song)=>(

//             <div
//             key={song.id}
//             className="flex items-center gap-x-4 w-full"
//             >
//          <div  className="flex-1">
//             <MediaItem 
//             onClick={()=>{}}
//             data={song}
//             />
//          </div>

//          {/* Todo:ADD LIKE Button Here */}
//             </div>
//         ))}
//         </div>
//     )
// }

// export default SearchContent;

// ///working
// "use client";
// import MediaItem from "@/components/MediaItem";
// import { Song } from "@/types";

// interface SearchContentProps {
//   songs: Song[]; // Correct typing of songs array
// }

// const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
//   if (songs.length === 0) {
//     return (
//       <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
//         No Songs found.
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-y-2 w-full px-6">
//       {songs.map((song) => (
//         <div key={song.id} className="flex items-center gap-x-4 w-full">
//           <div className="flex-1">
//             <MediaItem onClick={() => {}} data={song} />
//           </div>

//           {/* Todo: Add Like Button Here */}
//           <button
//             onClick={() => {}}
//             className="text-neutral-400 hover:text-white transition"
//           >
//             ❤️ {/* Placeholder for Like Icon */}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchContent;


"use client";

import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (!songs || songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id.toString()} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          <button
            onClick={() => {}}
            className="text-neutral-400 hover:text-white transition"
          >
            ❤️
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;