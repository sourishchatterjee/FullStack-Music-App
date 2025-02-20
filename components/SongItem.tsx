// "use client"
// import Image from "next/image";
// import useLoadImage from "@/Store/useLoadimage";
// import {Song} from "@/types"
// import PlayButton from "./PlayButton";

// interface SongItemProps{
//     data: Song;
//     onClick : (id:string)=>void

// }

// const SongItem :React.FC<SongItemProps> =({data, onClick})=>{

//     const imagePath= useLoadImage(data);


//     return(
//      <div
     
//      onClick={()=>{onClick(data.id)}}


//      className="
//      relative
//      group
//      flex
//      flex-col
//      items-center
//      justify-center
//      rounded-md
//      overflow-hidden
//      gap-x-4
//      bg-neutral-400/5
//      cursor-pointer
//      hover:bg-neutral-400/10
//      transition
//      p-3
     
//      ">
//         <div
//         className="
//         relative
//         aspect-square
//         w-full
//         h-full
//         rounded-md
//         overflow-hidden"
//         >
//             <Image
//             className="object-cover"
//             src={imagePath||"/images/love.png"}
//             fill
//             alt="Image"
            
//             />
//         </div>

//         <div
//         className="
//         flex 
//         flex-col 
//         items-start 
//         w-full 
//         pt-4 gap-y-1"
//         >
//             <p className="
//             font-semibold
//              truncate
//               w-full">
//                 {data.title}</p>
//          <p  className="
//          text-neutral-400
//           text-sm pb-4 
//           w-full truncate" >By  {data.author}</p>
//         </div>
//         <div className="absolute bottom-24 right-5">
//           <PlayButton/> 
//         </div>

//      </div>
//     )
// }


// export default SongItem



"use client"
import Image from "next/image";
import useLoadImage from "@/Store/useLoadimage";
import { Song } from "@/types";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => {
        onClick(data.id);
      }}
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-700
        cursor-pointer
        hover:bg-neutral-600
        hover:scale-105
        transition-all duration-300 ease-in-out
        p-3
        shadow-md
      "
    >
      <div
        className="
          relative
          aspect-square
          w-full
          h-full
          rounded-md
          overflow-hidden
          border-2 border-orange-400 shadow-md
          group-hover:border-white
        "
      >
        <Image
          className="object-cover"
          src={imagePath || "/images/love.png"}
          fill
          alt="Image"
        />
      </div>

      <div
        className="
          flex 
          flex-col 
          items-start 
          w-full 
          pt-4 gap-y-1
          text-white
        "
      >
        <p className="
          font-semibold
          truncate
          w-full
          text-lg
          drop-shadow-md
        ">
          {data.title}
        </p>
        <p className="
          text-gray-300
          text-sm pb-4 
          w-full truncate
          drop-shadow-md
        ">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
