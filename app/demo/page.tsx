
// "use client"

// import { AiOutlinePlus } from "react-icons/ai"
// import { TbPlaylist } from "react-icons/tb"

// import useAuthModal from "@/hooks/useAuthModal"
// import {useUser} from "@/hooks/useUser"
// import useUploadModal from "@/hooks/useUploadModal"


// function Library() {
// const authModal= useAuthModal();

// const uploadModal =useUploadModal()
// const {user} = useUser();

//     const onClick =()=>{
//         if(!user){
//           return authModal.onOpen();
//         }
//         //TODO:Check for subscription
//         return uploadModal.onOpen();
    
//     }
    

//   return (
//     <div  className="flex flex-col">
        
//         <div className="flex  items-center justify-between px-5 pt-4">
//       {/* <div className="
//        inline-flex
//        items-center
//        gap-x-2
      
//       ">
//         <TbPlaylist className="text-neutral-400" size={24}/>

//         <p className="text-neutral-400 font-medium text-md ">
//             Your Library
//         </p>

//         </div> */}
//         <h1>Welcome Admin</h1>

//         {/* //from here i can make a adminModel */}


//         <AiOutlinePlus
//         onClick={onClick}
//         size={20}
//         className="
//         text-neutral-400 
//         cursor-pointer
//         hover:text-white
//         transition
        
        
//         "> Add a new song</AiOutlinePlus>
//         </div>

//         <div className="
//         flex flex-col gap-y-2 mt-4 px-6
//         ">
//             List of Songs!

//         </div>
//     </div>
//   )
// }

// export default Library






"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

import useAuthModal from "@/Store/useAuthModal";
import { useUser } from "@/Store/useUser";
import useUploadModal from "@/Store/useUploadModal";
import SidebarItem from "@/components/SidebarItem";

function Library() {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
     // return authModal.onOpen();
     return uploadModal.onOpen();
    }
    //TODO: Check for subscription
    return uploadModal.onOpen();
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-x-2">
            <TbPlaylist className="text-neutral-400" size={24} />
            <h1 className="text-2xl font-semibold text-white">Your Music Library</h1>
          </div>

          <div>
          <AiOutlinePlus
        onClick={onClick}
        size={20}
        className="
        text-neutral-400 
        cursor-pointer
        hover:text-white
        transition
        
        
        "/>
            <span className="ml-2 text-neutral-400 text-sm">Add a new song</span>
          </div>
        </div>

        {/* Library Overview Section */}
        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Welcome Admin</h2>
          <p className="text-neutral-400 text-lg mb-4">
            Manage your music library, upload songs, and maintain your database.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              View All Songs
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Manage Artists
            </button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
              Manage Albums
            </button>
          </div>
        </div>
        {/* Song List Section */}
        <div className="mt-8 bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">List of Songs</h3>
          <div className="bg-neutral-700 p-4 rounded-lg shadow-md">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left py-2 px-4 text-neutral-300">Title</th>
                  <th className="text-left py-2 px-4 text-neutral-300">Artist</th>
                  <th className="text-left py-2 px-4 text-neutral-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Song Rows */}
                <tr className="hover:bg-neutral-600">
                  <td className="py-2 px-4">Song 1</td>
                  <td className="py-2 px-4">Artist 1</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-400 hover:text-blue-500 mr-2">
                      Edit
                    </button>
                    <button className="text-red-400 hover:text-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-600">
                  <td className="py-2 px-4">Song 2</td>
                  <td className="py-2 px-4">Artist 2</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-400 hover:text-blue-500 mr-2">
                      Edit
                    </button>
                    <button className="text-red-400 hover:text-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
















// "use client";

// import { AiOutlinePlus } from "react-icons/ai";
// import { TbPlaylist } from "react-icons/tb";
// import { useState, useEffect } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import useAuthModal from "@/Store/useAuthModal";
// import { useUser } from "@/Store/useUser";
// import useUploadModal from "@/Store/useUploadModal";
// import useLoadImage from "@/Store/useLoadimage";
// import { Song } from "@/types";
// import toast from "react-hot-toast";

// const Library = () => {
//   const supabaseClient = useSupabaseClient();
//   const authModal = useAuthModal();
//   const uploadModal = useUploadModal();
//   const { user } = useUser();
//   const [songs, setSongs] = useState<Song[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         setIsLoading(true);
        
//         const { data, error } = await supabaseClient
//           .from('songs')
//           .select('*')
//           .order('created_at', { ascending: false });

//         if (error) {
//           toast.error(error.message);
//           return;
//         }

//         setSongs(data || []);
//       } catch (error) {
//         toast.error('Failed to load songs');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSongs();
//   }, [supabaseClient]);

//   const onClick = () => {
//     if (!user) {
//       return authModal.onOpen();
//     }
//     return uploadModal.onOpen();
//   };

//   const handleDelete = async (songId: bigint) => {
//     try {
//       const { error } = await supabaseClient
//         .from('songs')
//         .delete()
//         .eq('id', songId);

//       if (error) {
//         toast.error(error.message);
//         return;
//       }

//       // Filter songs by the correct ID type
//       setSongs(songs.filter((song) => song.id !== songId));
//       toast.success('Song deleted successfully');
//     } catch (error) {
//       toast.error('Error deleting song');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 text-white">
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Header Section */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-x-2">
//             <TbPlaylist className="text-neutral-400" size={24} />
//             <h1 className="text-2xl font-semibold text-white">Your Music Library</h1>
//           </div>

//           <div className="flex items-center">
//             <AiOutlinePlus
//               onClick={onClick}
//               size={20}
//               className="text-neutral-400 cursor-pointer hover:text-white transition"
//             />
//             <span className="ml-2 text-neutral-400 text-sm">Add a new song</span>
//           </div>
//         </div>

//         {/* Song List Section */}
//         <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-4">Your Songs</h3>
//           <div className="bg-neutral-700 p-4 rounded-lg shadow-md overflow-x-auto">
//             {isLoading ? (
//               <div className="text-center py-4 text-neutral-400">Loading songs...</div>
//             ) : songs.length === 0 ? (
//               <div className="text-center py-4 text-neutral-400">
//                 No songs found. Click the plus icon to add your first song!
//               </div>
//             ) : (
//               <table className="w-full table-auto">
//                 <thead>
//                   <tr>
//                     <th className="text-left py-2 px-4 text-neutral-300">Image</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Title</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Artist</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {songs.map((song) => {
//                     const imageUrl = useLoadImage(song);
                    
//                     return (
//                       <tr key={song.id} className="hover:bg-neutral-600 transition">
//                         <td className="py-2 px-4">
//                           {imageUrl && (
//                             <img 
//                               src={imageUrl} 
//                               alt={song.title}
//                               className="w-10 h-10 rounded-md object-cover"
//                             />
//                           )}
//                         </td>
//                         <td className="py-2 px-4">{song.title}</td>
//                         <td className="py-2 px-4">{song.author}</td>
//                         <td className="py-2 px-4">
//                           <button 
//                             onClick={() => {}} 
//                             className="text-green-400 hover:text-green-500 mr-2 transition"
//                           >
//                             Play
//                           </button>
//                           {user?.id === song.user_id && (
//                             <button
//                               onClick={() => handleDelete(song.id)}
//                               className="text-red-400 hover:text-red-500 transition"
//                             >
//                               Delete
//                             </button>
//                           )}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Library;







// "use client";

// import { AiOutlinePlus } from "react-icons/ai";
// import { TbPlaylist } from "react-icons/tb";
// import { useState, useEffect } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import useAuthModal from "@/Store/useAuthModal";
// import { useUser } from "@/Store/useUser";
// import useUploadModal from "@/Store/useUploadModal";
// import useLoadImage from "@/Store/useLoadimage";
// import { Song } from "@/types";
// import toast from "react-hot-toast";

// const Library = () => {
//   const supabaseClient = useSupabaseClient();
//   const authModal = useAuthModal();
//   const uploadModal = useUploadModal();
//   const { user } = useUser();
//   const [songs, setSongs] = useState<Song[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         setIsLoading(true);
        
//         const { data, error } = await supabaseClient
//           .from('songs')
//           .select('*')
//           .order('created_at', { ascending: false });

//         if (error) {
//           toast.error(error.message);
//           return;
//         }

//         setSongs(data || []);
//       } catch (error) {
//         toast.error('Failed to load songs');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSongs();
//   }, [supabaseClient]);

//   const onClick = () => {
//     if (!user) {
//       return authModal.onOpen();
//     }
//     return uploadModal.onOpen();
//   };

//   const handleDelete = async (songId: string) => {
//     try {
//       const { error } = await supabaseClient
//         .from('songs')
//         .delete()
//         .eq('id', songId);

//       if (error) {
//         toast.error(error.message);
//         return;
//       }
// //@ts-ignore
//       setSongs(songs.filter(song => song.id !== songId));
//       toast.success('Song deleted successfully');
//     } catch (error) {
//       toast.error('Error deleting song');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 text-white">
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Header Section */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-x-2">
//             <TbPlaylist className="text-neutral-400" size={24} />
//             <h1 className="text-2xl font-semibold text-white">Your Music Library</h1>
//           </div>

//           <div className="flex items-center">
//             <AiOutlinePlus
//               onClick={onClick}
//               size={20}
//               className="text-neutral-400 cursor-pointer hover:text-white transition"
//             />
//             <span className="ml-2 text-neutral-400 text-sm">Add a new song</span>
//           </div>
//         </div>

//         {/* Song List Section */}
//         <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-4">Your Songs</h3>
//           <div className="bg-neutral-700 p-4 rounded-lg shadow-md overflow-x-auto">
//             {isLoading ? (
//               <div className="text-center py-4 text-neutral-400">Loading songs...</div>
//             ) : songs.length === 0 ? (
//               <div className="text-center py-4 text-neutral-400">
//                 No songs found. Click the plus icon to add your first song!
//               </div>
//             ) : (
//               <table className="w-full table-auto">
//                 <thead>
//                   <tr>
//                     <th className="text-left py-2 px-4 text-neutral-300">Image</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Title</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Artist</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {songs.map((song) => {
//                     const imageUrl = useLoadImage(song);
                    
//                     return (
//                       <tr key={song.id} className="hover:bg-neutral-600 transition">
//                         <td className="py-2 px-4">
//                           {imageUrl && (
//                             <img 
//                               src={imageUrl} 
//                               alt={song.title}
//                               className="w-10 h-10 rounded-md object-cover"
//                             />
//                           )}
//                         </td>
//                         <td className="py-2 px-4">{song.title}</td>
//                         <td className="py-2 px-4">{song.author}</td>
//                         <td className="py-2 px-4">
//                           <button 
//                             onClick={() => {}} 
//                             className="text-green-400 hover:text-green-500 mr-2 transition"
//                           >
//                             Play
//                           </button>
//                           {user?.id === song.user_id && (
//                             <button
//                             //@ts-ignore
//                               onClick={() => handleDelete(song.id)}
//                               className="text-red-400 hover:text-red-500 transition"
//                             >
//                               Delete
//                             </button>
//                           )}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Library;



// "use client";

// import { AiOutlinePlus } from "react-icons/ai";
// import { TbPlaylist } from "react-icons/tb";
// import { useState, useEffect } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import useAuthModal from "@/Store/useAuthModal";
// import { useUser } from "@/Store/useUser";
// import useUploadModal from "@/Store/useUploadModal";
// import useLoadImage from "@/Store/useLoadimage";
// import { Song } from "@/types";
// import toast from "react-hot-toast";

// interface SongWithImageUrl extends Song {
//   imageUrl: string | null;
// }

// const Library = () => {
//   const supabaseClient = useSupabaseClient();
//   const authModal = useAuthModal();
//   const uploadModal = useUploadModal();
//   const { user } = useUser();
//   const [songs, setSongs] = useState<SongWithImageUrl[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchSongs = async () => {
//       try {
//         setIsLoading(true);
        
//         const { data, error } = await supabaseClient
//           .from('songs')
//           .select('*')
//           .order('created_at', { ascending: false });

//         if (error) {
//           toast.error(error.message);
//           return;
//         }

//         // Process songs and load images outside of render
//         const songsWithImages = await Promise.all(
//           (data || []).map(async (song) => {
//             const imageUrl = useLoadImage({ image_path: song.image_path });
//             return {
//               ...song,
//               imageUrl
//             };
//           })
//         );

//         setSongs(songsWithImages);
//       } catch (error) {
//         toast.error('Failed to load songs');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSongs();
//   }, [supabaseClient]);

//   const onClick = () => {
//     if (!user) {
//       return authModal.onOpen();
//     }
//     return uploadModal.onOpen();
//   };

//   const handleDelete = async (songId: string) => {
//     try {
//       const { error } = await supabaseClient
//         .from('songs')
//         .delete()
//         .eq('id', songId);

//       if (error) {
//         toast.error(error.message);
//         return;
//       }

//       setSongs(songs.filter(song => song.id !== songId));
//       toast.success('Song deleted successfully');
//     } catch (error) {
//       toast.error('Error deleting song');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 text-white">
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Header Section */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-x-2">
//             <TbPlaylist className="text-neutral-400" size={24} />
//             <h1 className="text-2xl font-semibold text-white">Your Music Library</h1>
//           </div>

//           <div className="flex items-center">
//             <AiOutlinePlus
//               onClick={onClick}
//               size={20}
//               className="text-neutral-400 cursor-pointer hover:text-white transition"
//             />
//             <span className="ml-2 text-neutral-400 text-sm">Add a new song</span>
//           </div>
//         </div>

//         {/* Song List Section */}
//         <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-4">Your Songs</h3>
//           <div className="bg-neutral-700 p-4 rounded-lg shadow-md overflow-x-auto">
//             {isLoading ? (
//               <div className="text-center py-4 text-neutral-400">Loading songs...</div>
//             ) : songs.length === 0 ? (
//               <div className="text-center py-4 text-neutral-400">
//                 No songs found. Click the plus icon to add your first song!
//               </div>
//             ) : (
//               <table className="w-full table-auto">
//                 <thead>
//                   <tr>
//                     <th className="text-left py-2 px-4 text-neutral-300">Image</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Title</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Artist</th>
//                     <th className="text-left py-2 px-4 text-neutral-300">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {songs.map((song) => (
//                     <tr key={song.id} className="hover:bg-neutral-600 transition">
//                       <td className="py-2 px-4">
//                         {song.imageUrl && (
//                           <img 
//                             src={song.imageUrl} 
//                             alt={song.title}
//                             className="w-10 h-10 rounded-md object-cover"
//                           />
//                         )}
//                       </td>
//                       <td className="py-2 px-4">{song.title}</td>
//                       <td className="py-2 px-4">{song.author}</td>
//                       <td className="py-2 px-4">
//                         <button 
//                           onClick={() => {}} 
//                           className="text-green-400 hover:text-green-500 mr-2 transition"
//                         >
//                           Play
//                         </button>
//                         {user?.id === song.user_id && (
//                           <button
//                             onClick={() => handleDelete(song.id)}
//                             className="text-red-400 hover:text-red-500 transition"
//                           >
//                             Delete
//                           </button>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Library;