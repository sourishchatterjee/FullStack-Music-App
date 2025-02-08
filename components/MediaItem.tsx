// "use client"

// import useLoadImage from "@/Store/useLoadimage"
// import { Song } from "@/types"
// import Image from "next/image"

// interface MediaItemProps{

//     data:Song;
//     onClick?:(id:string)=>void;
// }

// const MediaItem: React.FC<MediaItemProps> =({data, onClick})=> {

// const imageUrl=useLoadImage(data);

// const handleClick=()=>{
//     if(onClick){
        
//         return onClick(data.id)
//     }

//     //todo :Default turn on player
// }




//   return (
//     <div
//     onClick={handleClick}
//     className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full 
//     p-2 rounded-md"
    
//     >
//         <div className="
//         relative
//         rounded-md
//         min-h-[48px]
//         min-w-[48px]
//         overflow-hidden
//         ">
//             <Image 
//             fill
//             src={imageUrl || '/image/love.png'}
//             alt="mediaItem"
//             className="object-cover"
//             onClick={window.location.reload();}
//             />
//         </div>
//         <div className="flex flex-col gap-y-1 overflow-hidden">
//             <p  className="text-white truncate" >{data.title}</p>
//             <p  className="text-neutral-400 text-sm truncate" > ok{data.author}</p>
//         </div>

   
   

//     </div>
//   )
// }

// export default MediaItem







//good


// "use client"

// import useLoadImage from "@/Store/useLoadimage"
// import { Song } from "@/types"
// import Image from "next/image"

// interface MediaItemProps{

//     data:Song;
//     onClick?:(id:string)=>void;
// }


// const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
//     const imageUrl = useLoadImage(data);
  
//     const handleClick = () => {
//       // Stop current song before starting the new one
//       if (onClick) {
//         return onClick(data.id);
        

//       }
  
//       // If there's a default logic, add it here
//     };
  
//     return (
//       <div
//         onClick={handleClick}
//         className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
//       >
//         <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
//           <Image fill src={imageUrl || "/image/love.png"} alt="mediaItem" className="object-cover" />
//         </div>
//         <div className="flex flex-col gap-y-1 overflow-hidden">
//           <p className="text-white truncate">{data.title}</p>
//           <p className="text-neutral-400 text-sm truncate">ok {data.author}</p>
//         </div>
//       </div>
//     );
//   };
  

//   export default MediaItem





///
"use client";

import { Song } from "@/types";
import useLoadImage from "@/Store/useLoadimage";
import Image from "next/image";
import usePlayer from "@/Store/usePlayer";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    // Default behavior if no onClick provided
    player.reset();
    player.setId(data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imageUrl || "/images/liked.png"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;







