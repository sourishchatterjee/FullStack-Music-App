// "use client"

// import { Song } from "@/types";
// import MediaItem from "./MediaItem";
// import { BsPauseFill, BsPlayFill } from "react-icons/bs";
// import Button from "./Button";
// import { AiFillBackward, AiFillStepBackward, AiFillStepForward } from "react-icons/ai";

// interface PlayerContentProps{
//     song:Song;
//     songUrl: string;
    
// }
// const PlayerContent: React.FC<PlayerContentProps>=({song,songUrl})=>{
    
//     const Icon= true ? BsPauseFill :BsPlayFill;
//     return(
//         <div className="
//         grid 
//         grid-cols-2 
//         md:grid-col-3
//         h-full">


//             <div className="
//             flex
//             w-full
//             justify-start
            
//             ">
//                 <div className="flex items-center gap-x-4">

//                     <MediaItem data={song}/>
//                     <Button> <Icon size={30} className="text-black"/></Button>
                    

//                 </div>


//             </div>
// {/*             
//            <div className="
//            flex 
//            md:hidden 
//            col-auto
//            w-full 
//            justify-end 
//            items-center"
//            >
//             <div onClick={()=>{}}
//                 className="
//                  h-10  
//                  w-10
//                  items-center
//                  justify-center
//                  rounded-full
//                  bg-white
//                  p-1
//                  cursor-pointer
//                 "
//                 > <Button> click<Icon size={30} className="text-black"/></Button>
                    


//             </div>
//            </div> */}


// <div className=" 
// hidden 
// h-full
//  md:flex
// justify-center
// items-center
// w-full
// max-w-[722px]
// gap-x-6

// ">
//     <AiFillStepBackward
//     size={30}
//     className="
//     text-neutral-400
//      cursor-pointer
//      hover:text-white
//      transition
//         "
//     />
// </div>

// <div 
// onClick={()=>{}}
// className="
// flex 
// items-center 
// justify-center 
// h-10 
// w-10 rounded-full p-1 
// cursor-pointer" 
//     >

// <Icon  size={30} className="bg-white"/>
// </div>
// <AiFillStepForward size={30}/>

//         </div>
//     )
// }

// export default PlayerContent

// "use client";

// import { Song } from "@/types";
// import MediaItem from "./MediaItem";
// import { BsPauseFill, BsPlayFill } from "react-icons/bs";
// import Button from "./Button";
// import useSound from "use-sound";
// import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
// import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
// import Slider from "./Slider";
// import usePlayer from "@/hooks/usePlayer";
// import { useEffect, useState } from "react";

// //import { VolumeIcon } from "lucide-react";


// interface PlayerContentProps {
//   song: Song;
//   songUrl: string;
// }

// const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  
  
//   const player=usePlayer();

//   const [volume ,setVolume]=useState(1)
//   const [isPlaying,setIsPlaying]= useState(false)

//     const isplaying = true; // Replace with state or props to toggle play/pause
  
  
//   const Icon = isPlaying ? BsPauseFill : BsPlayFill;

//   const VolumeIcon =volume === 0? HiSpeakerXMark :HiSpeakerWave;



// const onPlayNext=()=>{
//     if(player.ids.length ===0){
//         return
//     }

// const currentIndex=player.ids.findIndex((id)=>id=== player.activeId);

// const nextSong =player.ids[currentIndex +1];

// if(!nextSong){
//     return player.setId(player.ids[0]);
// }
// player.setId(nextSong)
// }


// const onPlayPrevious=()=>{
//     if(player.ids.length ===0){
//         return
//     }

// const currentIndex=player.ids.findIndex((id)=>id=== player.activeId);

// const previousSong =player.ids[currentIndex -1];

// if(!previousSong){
//     return player.setId(player.ids[player.ids.length-1]);
// }
// player.setId(previousSong)
// }

// const [play,{pause, sound}]=useSound(
//     songUrl,{
//     volume:  volume ,
//     onplay:()=> setIsPlaying(true),
//     onend: ()=>{
//     setIsPlaying(false);
//     onPlayNext();
//     },
// onpause:()=>setIsPlaying(false),
// format:['mp3']

//  }
// )

// useEffect(()=>{

// sound?.play();

// return()=>{
// sound?.unload()
// }
// },[sound])


// const handlePlay=()=>{

// if(!isPlaying){
// play();
// }else{pause()}
// }

// const toggleMute =()=>{

// if(volume===0){
// setVolume(1)

// }else{setVolume(0)}
// }

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 h-full items-center gap-x-4 px-4">
//       {/* Left Section: Song Info */}
//       <div className="flex w-full justify-start items-center">
//         <div className="flex items-center gap-x-4">
//           <MediaItem data={song} />
          
//         </div>
//       </div>

//       {/* Center Section: Playback Controls */}
//       <div
//         className="
//           hidden 
//           md:flex 
//           justify-center 
//           items-center 
//           w-full 
//           max-w-[722px] 
//           gap-x-6
//         "
//       >
//         <AiFillStepBackward
//         onClick={onPlayPrevious}
//           size={30}
//           className="
//             text-neutral-400 
//             cursor-pointer 
//             hover:text-white 
//             transition
//           "
//         />
//         <div
//           onClick={() => {}}
//           className="
//             flex 
//             items-center 
//             justify-center 
//             h-10 
//             w-10 
//             rounded-full 
//             bg-white 
//             p-1 
//             cursor-pointer
//           "
//         >
//           <Icon size={30} className="text-black" />
//         </div>
//         <AiFillStepForward
//         onClick={onPlayNext}
//           size={30}
//           className="
//             text-neutral-400 
//             cursor-pointer 
//             hover:text-white 
//             transition
//           "
//         />
//       </div>

//       {/* Right Section: Mobile Controls */}
//       <div
//         className="
//           flex 
//           md:hidden 
//           justify-end 
//           items-center 
//           w-full
//         "
//       >
//         <div
//           onClick={() => {}}
//           className="
//             flex 
//             items-center 
//             justify-center 
//             h-10 
//             w-10 
//             rounded-full 
//             bg-white 
//             p-1 
//             cursor-pointer
//           "
//         >
//           <Icon size={30} className="text-black" />
//         </div>
//       </div>

// <div className="hidden md:flex w-full justify-end pr-2">
//     <div className="flex items-center gap-x-2 w-[120px]">
//         <VolumeIcon
        
//         onClick={toggleMute}
//         className="cursor-pointer"
//         size={34}
//         />
//         <Slider
//         value={volume}
//         onChange={(value)=>setVolume(value)}
        
//         />
//     </div>
// </div>



//     </div>
//   );
// };

// export default PlayerContent;
"use client";

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Slider from "./Slider";
import usePlayer from "@/Store/usePlayer";
import useSound from "use-sound";
import { useEffect, useState } from "react";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    if (player.ids.length === 0) return;

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) return player.setId(player.ids[0]);
    player.setId(nextSong);
  };

  const onPlayPrevious = () => {
    if (player.ids.length === 0) return;

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) return player.setId(player.ids[player.ids.length - 1]);
    player.setId(previousSong);
  };

  const [play, { pause, sound }] = useSound(songUrl, {
    volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  });

  useEffect(() => {
    sound?.play();
    return () => {
      sound?.unload();
    };
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      sound?.pause(); // Ensure pause works only if `sound` is defined
    }
  };

  const toggleMute = () => {
    setVolume(volume === 0 ? 1 : 0);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full items-center gap-x-4 px-4">
      {/* Left Section: Song Info */}
      <div className="flex w-full justify-start items-center">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
        </div>
      </div>

      {/* Center Section: Playback Controls */}
      <div
        className="hidden md:flex justify-center items-center w-full max-w-[722px] gap-x-6"
      >
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div
          onClick={handlePlay}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      {/* Right Section: Volume Control */}
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            className="cursor-pointer"
            size={34}
          />
          <Slider
            value={volume}
            onChange={(value) => setVolume(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
