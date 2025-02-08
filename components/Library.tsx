"use client";
import { TbPlaylist } from "react-icons/tb";
import useAuthModal from "@/Store/useAuthModal";
import { useUser } from "@/Store/useUser";
import useUploadModal from "@/Store/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // TODO: Check for subscription
    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={24} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>

        {/* Uncomment to enable admin model for adding */}
        {/* 
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
        */}
      </div>

      <div className="flex flex-col gap-y-2 mt-4 px-6">
        List of Songs!
        {songs.map((item) => (
          <MediaItem
            onClick={()=>{}} // Pass onClick here
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
