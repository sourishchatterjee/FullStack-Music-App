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





//"I am using Supabase as my backend, 
// and my database schema is based on Prisma's model structure."




// import { useEffect, useState } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { Song } from "@/types";

// const useLoadImage = (song?: Song) => {
//   const supabaseClient = useSupabaseClient();
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadImage = async () => {
//       // Reset states when starting a new load
//       setIsLoading(true);
//       setError(null);
//       setImageUrl(null);

//       try {
//         // Check for valid song and image path
//         if (!song || !song.image_path) {
//           throw new Error("No song or image path provided");
//         }

//         const { data, error } = await supabaseClient.storage
//           .from("images")
//           .getPublicUrl(song.image_path);

//         if (error) {
//           throw error;
//         }

//         if (!data.publicUrl) {
//           throw new Error("No public URL found for image");
//         }

//         // Verify the image URL is accessible
//         const imageExists = await fetch(data.publicUrl, { method: 'HEAD' })
//           .then(res => res.ok)
//           .catch(() => false);

//         if (!imageExists) {
//           throw new Error("Image URL is not accessible");
//         }

//         setImageUrl(data.publicUrl);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to load image");
//         console.error("Error in useLoadImage:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     // Only attempt to load if we have a song
//     if (song) {
//       loadImage();
//     }

//     // Cleanup function to handle component unmounting
//     return () => {
//       setImageUrl(null);
//       setIsLoading(false);
//       setError(null);
//     };
//   }, [song, supabaseClient, song?.image_path]);

//   return {
//     imageUrl,
//     isLoading,
//     error,
//     reload: () => {
//       if (song) {
//         setImageUrl(null);
//         setError(null);
//         setIsLoading(true);
//       }
//     }
//   };
// };

// export default useLoadImage;




// import { useEffect, useState } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { Song } from "@/types";

// const useLoadImage = (song?: Song) => {
//   const supabaseClient = useSupabaseClient();
//   // Initialize imageUrl as null instead of empty string
//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     const loadImage = async () => {
//       // Reset to null (not empty string)
//       setImageUrl(null);

//       if (!song || !song.image_path) {
//         return;
//       }

//       try {
//         const { data } = await supabaseClient.storage
//           .from("images")
//           .getPublicUrl(song.image_path);

//         // Only set URL if it's a non-empty string
//         if (data?.publicUrl && typeof data.publicUrl === 'string' && data.publicUrl.trim() !== '') {
//           setImageUrl(data.publicUrl);
//         } else {
//           setImageUrl(null);
//         }
//       } catch (error) {
//         console.error("Error loading image:", error);
//         setImageUrl(null);
//       }
//     };

//     loadImage();
//   }, [song, supabaseClient]);

//   // Return null instead of empty string if no URL is available
//   return imageUrl;
// };

// export default useLoadImage;







//main main

// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { Song } from "@/types";

// const useLoadImage = (song?: Song) => {
//   const supabaseClient = useSupabaseClient();

//   // Ensure song exists and has a valid image_path
//   if (!song || !song.image_path) {
//     return null;
//   }

//   // Fetch the public URL from Supabase Storage
//   const { data } = supabaseClient.storage
//     .from("images") // Adjust if your bucket name is different
//     .getPublicUrl(song.image_path);

//   // Return the public URL if found, otherwise return null
//   return data?.publicUrl || null;
// };

// export default useLoadImage;



import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Song } from "@/types";

const useLoadImage = (song?: Song) => {
  const supabaseClient = useSupabaseClient();

  // Ensure song exists and has a valid image_path
  if (!song?.image_path) {
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