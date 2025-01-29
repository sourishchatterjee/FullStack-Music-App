// import { useSupabaseClient } from "@supabase/auth-helpers-react";

// import {Song} from "@/types"

// const useLoadImage =(song:Song)=>{

//     const supabaseClient=useSupabaseClient();
    
//     if(!song){
//     return null;

// }

// const {data :imageData}= supabaseClient
// .storage
// .from("images")
// .getPublicUrl("songs.img_path");

// return imageData.publicUrl


// }
// export default useLoadImage;






222
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Song } from "@/types";

const useLoadImage = (song?: Song) => {
  const supabaseClient = useSupabaseClient();

  // Ensure song exists and has a valid image_path
  if (!song || !song.image_path) {
    return null;
  }

  // Fetch the public URL from Supabase Storage
  const { data } = supabaseClient.storage
    .from("images") // Adjust if your bucket name is different
    .getPublicUrl(song.image_path);

  // Return the public URL if found, otherwise return null
  return data?.publicUrl || null;
};

export default useLoadImage;


//"I am using Supabase as my backend, 
// and my database schema is based on Prisma's model structure."




// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { Song } from "@/types";

// const useLoadImage = (song?: Song) => {
//   const supabaseClient = useSupabaseClient();

//   // Check if song exists and has a valid image_path
//   if (!song || !song.image_path) {
//     return null; // Return null if no image path is provided
//   }

//   // Make sure supabaseClient is available
//   if (!supabaseClient) {
//     console.error("Supabase client is not initialized");
//     return null;
//   }

//   try {
//     // Fetch the public URL from Supabase Storage
//     //@ts-ignore
//     const { data, error } = supabaseClient.storage
//       .from("images") // Ensure this is the correct bucket name
//       .getPublicUrl(song.image_path);

//     // Handle error if fetching the URL fails
//     if (error) {
//       console.error("Error fetching image:", error.message);
//       return null;
//     }

//     // Return the public URL if available, otherwise return null
//     return data?.publicUrl || null;
//   } catch (err) {
//     console.error("Unexpected error:", err);
//     return null;
//   }
// };

// export default useLoadImage;









// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { Song } from "@/types";
// import { useMemo } from "react";

// const useLoadImage = (song?: Song) => {
//   const supabaseClient = useSupabaseClient(); // ✅ Always called at top level

//   // Memoize the image URL calculation
//   const imageUrl = useMemo(() => {
//     if (!song?.image_path) return null; // ✅ Always return a stable value
//     return supabaseClient.storage.from("images").getPublicUrl(song.image_path)
//       .data.publicUrl;
//   }, [supabaseClient, song]);

//   return imageUrl;
// };

// export default useLoadImage;
