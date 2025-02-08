// import getSongsByTitle from "@/actions/getSongsByTitle copy";
// import Header from "@/components/Header";

// interface SearchProps {
//     searchParams:{

//         title:string;
//     }
// }

// const Search= async ({searchParams}:SearchProps)=>{
//     const songs= await getSongsByTitle(searchParams.title)


//     return(
//         <div
        
//         className="
//          bg-neutral-900
//          rounded-lg
//          h-full
//          w-full
//          overflow-hidden
//          overflow-y-auto"
//         >

//             <Header
//                 className="from-bg-neutral-900">

//                     <div className="mb-2 flex flex-col gap-y-6">
//                         <h1 className="text-white text-3xl font-semibold">
//                             search

                            
//                         </h1>

//                     </div>

//             </Header>
//             search!
//         </div>
//     )
// }





// "use client";

// import { useState, useEffect } from "react";
// import getSongsByTitle from "@/actions/getSongsByTitle copy"; // Import the function you provided
// import Header from "@/components/Header";
// import SongItem from "@/components/SongItem"; // Import SongItem to display each song
// import { Song } from "@/types";

// interface SearchProps {
//   searchParams: {
//     title: string;
//   };
// }

// const Search = async ({ searchParams }: SearchProps) => {
//   const [songs, setSongs] = useState<Song[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>(searchParams.title || "");

//   // Fetch songs based on the title
//   useEffect(() => {
//     const fetchSongs = async () => {
//       if (searchQuery) {
//         const filteredSongs = await getSongsByTitle(searchQuery);
//         setSongs(filteredSongs);
//       } else {
//         // If there's no search query, fetch all songs
//         const allSongs = await getSongsByTitle("");
//         setSongs(allSongs);
//       }
//     };
//     fetchSongs();
//   }, [searchQuery]);

//   // Handle search input change
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle song click
//   const handleSongClick = (id: string) => {
//     // Handle song click here (e.g., play the song or navigate)
//     console.log(`Song with ID: ${id} clicked`);
//   };

//   return (
//     <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
//       <Header className="from-bg-neutral-900">
//         <div className="mb-2 flex flex-col gap-y-6">
//           <h1 className="text-white text-3xl font-semibold">Search</h1>

//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search for songs..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </Header>

//       <div className="p-4">
//         {songs.length > 0 ? (
//           songs.map((song) => (
//             <SongItem key={song.id} data={song} onClick={handleSongClick} />
//           ))
//         ) : (
//           <p className="text-gray-500">No songs found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;

// "use client";

// import { useState, useEffect } from "react";
// import getSongsByTitle from "@/actions/getSongsByTitle"; // Import the function you provided
// import Header from "@/components/Header";
// import SongItem from "@/components/SongItem"; // Import SongItem to display each song
// import { Song } from "@/types";

// interface SearchProps {
//   searchParams: {
//     title: string;
//   };
// }

// const Search = ({ searchParams }: SearchProps) => {
//   const [songs, setSongs] = useState<Song[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>(searchParams.title || "");
//   const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

//   // Debouncing logic
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setDebouncedSearchQuery(searchQuery);
//     }, 500); // 500ms debounce

//     return () => clearTimeout(timeoutId);
//   }, [searchQuery]);

//   // Fetch songs based on the debounced search title
//   useEffect(() => {
//     const fetchSongs = async () => {
//       if (debouncedSearchQuery) {
//         const filteredSongs = await getSongsByTitle(debouncedSearchQuery);
//         setSongs(filteredSongs);
//       } else {
//         // If no search query, fetch all songs
//         const allSongs = await getSongsByTitle("");
//         setSongs(allSongs);
//       }
//     };
//     fetchSongs();
//   }, [debouncedSearchQuery]);

//   // Handle search input change
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   // Handle song click
//   const handleSongClick = (id: string) => {
//     // Handle song click here (e.g., play the song or navigate)
//     console.log(`Song with ID: ${id} clicked`);
//   };

//   return (
//     <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
//       <Header className="from-bg-neutral-900">
//         <div className="mb-2 flex flex-col gap-y-6">
//           <h1 className="text-white text-3xl font-semibold">Search</h1>

//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search for songs..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </Header>

//       <div className="p-4">
//         {songs.length > 0 ? (
//           songs.map((song) => (
//             <SongItem key={song.id} data={song} onClick={handleSongClick} />
//           ))
//         ) : (
//           <p className="text-gray-500">No songs found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;



//okkkay code  working

// import getSongsByTitle from "@/actions/getSongsByTitle";
// import Header from "@/components/Header";
// import SearchInput from "@/components/SearchInput";
// import SearchContent from "./ui/SearchContent";

// interface SearchProps {
//     searchParams:{

//         title:string;
//     }
// }

// const Search= async ({searchParams}:SearchProps)=>{
//     const songs= await getSongsByTitle(searchParams.title)


//     return(
//         <div
        
//         className="
//          bg-neutral-900
//          rounded-lg
//          h-full
//          w-full
//          overflow-hidden
//          overflow-y-auto"
//         >

//             <Header
//                 className="from-bg-neutral-900">

//                     <div className="mb-2 flex flex-col gap-y-6">
//                         <h1 className="text-white text-3xl font-semibold">
//                             search

                            
//                         </h1>
//                      <SearchInput/>
//                     </div>

//             </Header>
//         <SearchContent songs={songs}/>
            
//         </div>
//     )
// } 


// export default Search;



import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./ui/SearchContent";

// Update the props interface to match Next.js expectations
interface SearchPageProps {
  searchParams: {
    title?: string; // Make title optional since it might not always be present
  };
}
export const revalidate=0;

const Search = async ({ searchParams }: SearchPageProps) => {
  // Add null check for title
  const songs = await getSongsByTitle(searchParams.title || '');

  return (
    <div 
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto"
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Search
          </h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;