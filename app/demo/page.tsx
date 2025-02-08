// // //new   this is also working all
// "use client"

// import React, { useEffect, useState } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import { TbPlaylist } from "react-icons/tb";
// import { Song } from "@/types";
// import useUploadModal from "@/Store/useUploadModal";
// import { useSessionContext } from "@supabase/auth-helpers-react";
// import toast from "react-hot-toast";
// import EditSongModal from "@/components/EditSongModal";
// import useLoadImage from "@/Store/useLoadimage";
// import Image from "next/image";

// interface LibraryProps {
//   data?: Song[];
// }

// const Library: React.FC<LibraryProps> = ({ data: initialData = [] }) => {
//   const uploadModal = useUploadModal();
//   const { supabaseClient } = useSessionContext();
//   const [songs, setSongs] = useState<Song[]>(initialData);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [selectedSong, setSelectedSong] = useState<Song | null>(null);

//   const SongRow: React.FC<{ song: Song }> = ({ song }) => {
//     const imageUrl = useLoadImage(song);
    
//     return (
//       <tr className="hover:bg-neutral-700 transition duration-300">
//         <td className="py-3 px-4">
//           <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-lg">
//             {imageUrl ? (
//               <Image
//                 src={imageUrl}
//                 alt={song.title || 'Song Image'}
//                 width={64}
//                 height={64}
//                 className="object-cover"
//               />
//             ) : (
//               <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
//                 <TbPlaylist size={24} className="text-gray-400" />
//               </div>
//             )}
//           </div>
//         </td>
//         <td className="py-3 px-4 font-medium text-white">{song.title}</td>
//         <td className="py-3 px-4 text-gray-400">{song.author}</td>
//         <td className="py-3 px-4 flex gap-x-2">
//           <button
//             onClick={() => handleEdit(song)}
//             className="text-blue-400 hover:text-blue-500 transition"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => handleDelete(song.id)}
//             className="text-red-400 hover:text-red-500 transition"
//           >
//             Delete
//           </button>
//         </td>
//       </tr>
//     );
//   };

//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         setIsLoading(true);
//         const { data: songsData, error } = await supabaseClient
//           .from("songs")
//           .select("*")
//           .order("created_at", { ascending: false });

//         if (error) throw error;

//         setSongs(
//           songsData.map((song: any) => ({
//             ...song,
//             created_at: new Date(song.created_at),
//           }))
//         );
//       } catch (error) {
//         toast.error("Failed to load songs");
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSongs();
//   }, [supabaseClient]);

//   const handleEdit = (song: Song) => {
//     console.log('Selected Song for Edit:', song);
//     if (song) {
//       setSelectedSong(song);
//       setIsEditModalOpen(true);
//     } else {
//       toast.error('Invalid song selected');
//     }
//   };

//   const handleUpdate = async (updatedSong: Song) => {
//     try {
//       const { error } = await supabaseClient
//         .from("songs")
//         .update({
//           title: updatedSong.title,
//           author: updatedSong.author,
//           image_path: updatedSong.image_path
//         })
//         .eq("id", updatedSong.id);

//       if (error) throw error;

//       setSongs((prevSongs) =>
//         prevSongs.map((song) =>
//           song.id === updatedSong.id ? updatedSong : song
//         )
//       );
      
//       setIsEditModalOpen(false);
//       setSelectedSong(null);
//       toast.success("Song updated successfully");
//     } catch (error) {
//       toast.error("Failed to update song");
//       console.error(error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       const { error } = await supabaseClient
//         .from("songs")
//         .delete()
//         .eq("id", id);
      
//       if (error) throw error;
      
//       setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
//       toast.success("Song deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete song");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold flex items-center gap-2">
//             <TbPlaylist size={28} className="text-gray-400" />
//             Your Music Library
//           </h1>
//           <button
//             onClick={() => uploadModal.onOpen()}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-md shadow-lg"
//           >
//             <AiOutlinePlus size={20} /> Add Song
//           </button>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
//           {isLoading ? (
//             <p className="text-gray-400 text-center">Loading songs...</p>
//           ) : songs.length === 0 ? (
//             <p className="text-gray-400 text-center">No songs found</p>
//           ) : (
//             <table className="w-full border-collapse text-left">
//               <thead>
//                 <tr className="border-b border-gray-700">
//                   <th className="py-3 px-4 text-gray-400">Image</th>
//                   <th className="py-3 px-4 text-gray-400">Title</th>
//                   <th className="py-3 px-4 text-gray-400">Artist</th>
//                   <th className="py-3 px-4 text-gray-400">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {songs.map((song) => (
//                   <SongRow key={song.id} song={song} />
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>

//       {isEditModalOpen && selectedSong && (
//         <EditSongModal
//           isOpen={isEditModalOpen}
//           onClose={() => {
//             setIsEditModalOpen(false);
//             setSelectedSong(null);
//           }}
//           onUpdate={handleUpdate}
//           song={selectedSong}
//         />
//       )}
//     </div>
//   );
// };

// export default Library;


/////this is the main thing that is working@@@@@@@@@

"use client"

import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import { Song } from "@/types";
import useUploadModal from "@/Store/useUploadModal";
import { useSessionContext } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import EditSongModal from "@/components/EditSongModal";
import useLoadImage from "@/Store/useLoadimage";
import Image from "next/image";

interface LibraryProps {
  data?: Song[];
}

const Library: React.FC<LibraryProps> = ({ data: initialData = [] }) => {
  const uploadModal = useUploadModal();
  const { supabaseClient } = useSessionContext();
  const [songs, setSongs] = useState<Song[]>(initialData);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [libraryStats, setLibraryStats] = useState({
    totalSongs: 0,
    latestSongDate: null as Date | null,
    oldestSongDate: null as Date | null
  });

  const SongRow: React.FC<{ song: Song }> = ({ song }) => {
    const imageUrl = useLoadImage(song);
    
    return (
      <tr className="hover:bg-neutral-700 transition duration-300">
        <td className="py-3 px-4">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-lg">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={song.title || 'Song Image'}
                width={64}
                height={64}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                <TbPlaylist size={24} className="text-gray-400" />
              </div>
            )}
          </div>
        </td>
        <td className="py-3 px-4 font-medium text-white">{song.title}</td>
        <td className="py-3 px-4 text-gray-400">{song.author}</td>
        <td className="py-3 px-4 flex gap-x-2">
          <button
            onClick={() => handleEdit(song)}
            className="text-blue-400 hover:text-blue-500 transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(song.id)}
            className="text-red-400 hover:text-red-500 transition"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setIsLoading(true);
        const { data: songsData, error } = await supabaseClient
          .from("songs")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        const processedSongs = songsData.map((song: any) => ({
          ...song,
          created_at: new Date(song.created_at),
        }));

        setSongs(processedSongs);
        setFilteredSongs(processedSongs);

        if (processedSongs.length > 0) {
          setLibraryStats({
            totalSongs: processedSongs.length,
            latestSongDate: processedSongs[0].created_at,
            oldestSongDate: processedSongs[processedSongs.length - 1].created_at
          });
        }
      } catch (error) {
        toast.error("Failed to load songs");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSongs();
  }, [supabaseClient]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = songs.filter(
      song => 
        song.title.toLowerCase().includes(term) || 
        song.author.toLowerCase().includes(term)
    );

    setFilteredSongs(filtered);
  };

  const handleEdit = (song: Song) => {
    if (song) {
      setSelectedSong(song);
      setIsEditModalOpen(true);
    } else {
      toast.error('Invalid song selected');
    }
  };

  const handleUpdate = async (updatedSong: Song) => {
    try {
      const { error } = await supabaseClient
        .from("songs")
        .update({
          title: updatedSong.title,
          author: updatedSong.author,
          image_path: updatedSong.image_path
        })
        .eq("id", updatedSong.id);

      if (error) throw error;

      const updatedSongs = songs.map((song) =>
        song.id === updatedSong.id ? updatedSong : song
      );

      setSongs(updatedSongs);
      setFilteredSongs(updatedSongs.filter(
        song => 
          song.title.toLowerCase().includes(searchTerm) || 
          song.author.toLowerCase().includes(searchTerm)
      ));
      
      setIsEditModalOpen(false);
      setSelectedSong(null);
      toast.success("Song updated successfully");
    } catch (error) {
      toast.error("Failed to update song");
      console.error(error);
    }
  };

  // const handleDelete = async (id: string) => {
  //   try {
  //     const { error } = await supabaseClient
  //       .from("songs")
  //       .delete()
  //       .eq("id", id);
      
  //     if (error) throw error;
      
  //     const updatedSongs = songs.filter((song) => song.id !== id);
  //     setSongs(updatedSongs);
  //     setFilteredSongs(updatedSongs.filter(
  //       song => 
  //         song.title.toLowerCase().includes(searchTerm) || 
  //         song.author.toLowerCase().includes(searchTerm)
  //     ));

  //     toast.success("Song deleted successfully");
  //   } catch (error) {
  //     toast.error("Failed to delete song");
  //     console.error(error);
  //   }
  // };

  const handleDelete = async (id: string) => {
    try {
      // First, delete all references in the liked_songs table
      const { error: likedSongsError } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("song_id", id);

      if (likedSongsError) throw likedSongsError;

      // Then delete the song itself
      const { error: songError } = await supabaseClient
        .from("songs")
        .delete()
        .eq("id", id);
      
      if (songError) throw songError;
      
      const updatedSongs = songs.filter((song) => song.id !== id);
      setSongs(updatedSongs);
      setFilteredSongs(updatedSongs.filter(
        song => 
          song.title.toLowerCase().includes(searchTerm) || 
          song.author.toLowerCase().includes(searchTerm)
      ));

      toast.success("Song deleted successfully");
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to delete song");
      }
    }
  };




  const formatDate = (date: Date | null) => {
    return date 
      ? `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`
      : 'N/A';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        

        {/* Search and Add Song Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <TbPlaylist size={28} className="text-gray-400" />
            Your Music Library
          </h1>
          <div className="p-4 rounded-lg shadow-lg">
  <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-lg font-bold">
    Welcome back! Admin
  </h5>
</div>


          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search songs..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <AiOutlineSearch 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
              />
            </div>
            <button
              onClick={() => uploadModal.onOpen()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-md shadow-lg"
            >
              <AiOutlinePlus size={20} /> Add Song
            </button>
          </div>
        </div>
        {/* Library Statistics Section */}
        <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-800 p-4 rounded-lg shadow-xl">
          <div className="bg-gray-900 p-4 rounded-md">
            <h3 className="text-gray-400 text-sm mb-2">Total Songs</h3>
            <p className="text-2xl font-bold text-white">{libraryStats.totalSongs}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-md">
            <h3 className="text-gray-400 text-sm mb-2">Latest Song Added</h3>
            <p className="text-sm text-white">{formatDate(libraryStats.latestSongDate)}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-md">
            <h3 className="text-gray-400 text-sm mb-2">Oldest Song Added</h3>
            <p className="text-sm text-white">{formatDate(libraryStats.oldestSongDate)}</p>
          </div>
        </div>

        

        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          {isLoading ? (
            <p className="text-gray-400 text-center">Loading songs...</p>
          ) : filteredSongs.length === 0 ? (
            <p className="text-gray-400 text-center">No songs found</p>
          ) : (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-gray-400">Image</th>
                  <th className="py-3 px-4 text-gray-400">Title</th>
                  <th className="py-3 px-4 text-gray-400">Artist</th>
                  <th className="py-3 px-4 text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSongs.map((song) => (
                  <SongRow key={song.id} song={song} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {isEditModalOpen && selectedSong && (
        <EditSongModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedSong(null);
          }}
          onUpdate={handleUpdate}
          song={selectedSong}
        />
      )}
    </div>
  );
};

export default Library;








