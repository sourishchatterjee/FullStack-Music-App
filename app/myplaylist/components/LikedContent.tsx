// "use client"

// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

// import { Song } from "@/types"

// import { useUser } from "@/Store/useUser"
// import MediaItem from "@/components/MediaItem"
// import LikeButton from "@/components/LikeButton"

// interface LikedContentProps{
//     songs:Song[];
// }

// const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
//   const router = useRouter();
//   const { isLoading, user } = useUser();

//   useEffect(() => {
//     if (!isLoading && !user) {
//       router.replace("/");
//     }
//   }, [isLoading, user, router]);

//   if (songs.length === 0) {
//     return (
//       <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
//         No liked songs.
//       </div>
//     );
//   }

//   // ✅ Define a valid client function
//   const handleMediaClick = (songId: string) => {
//     console.log("Clicked song:", songId);
//   };

//   return (
//     <div className="flex flex-col gap-y-2 w-full p-6">
//       {songs.map((song) => (
//         <div key={song.id}>
//           <div>
//             {/* ✅ Pass the function reference instead of an empty arrow function */}
//             <MediaItem onClick={() => handleMediaClick(song.id)} data={song} />
//           </div>
//           <LikeButton songId={song.id} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LikedContent;


"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Song } from "@/types";
import { useUser } from "@/Store/useUser";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center justify-between">
          <MediaItem onClick={() => {}} data={song} />
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
