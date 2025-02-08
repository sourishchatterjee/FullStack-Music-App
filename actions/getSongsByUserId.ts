// import { Song } from "@/types";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";


// const getSongsByUserId=async():Promise<Song[]>=>{
//     const supabase =createServerComponentClient({
        
//         cookies:cookies
//     });

//     const {
//         data:sessionData,
//         error: sessionError,
//     } =await supabase.auth.getSession();

//     if(sessionError){
//         console.log(sessionError.message);
//         return[];
//     }

// const {data,error}=await supabase
// .from('songs')
// .select('*')
// .eq("user_id",sessionData.session?.user.id)
// .order("created_at",{ascending:false});
// if(error){
//     console.log(error.message)
// }

// return (data as any) ||[];
    
// }
// export default getSongsByUserId



// import { Song } from "@/types";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// const getSongsByUserId = async (): Promise<Song[]> => {
//     const supabase = createServerComponentClient({ cookies });

//     const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

//     if (sessionError) {
//         console.log("Session Error:", sessionError.message);
//         return [];
//     }

//     if (!sessionData.session) {
//         console.log("No session found.");
//         return [];
//     }

//     const userId = sessionData.session.user?.id;
//     if (!userId) {
//         console.log("User ID is undefined");
//         return [];
//     }

//     const { data, error } = await supabase
//         .from('songs')
//         .select('*')
//         .eq("user_id", userId)
//         .order("created_at", { ascending: false });

//     if (error) {
//         console.log("Supabase Query Error:", error.message);
//     }

//     return data || [];
// };

// export default getSongsByUserId;




//main working one


// "use server";

// import { Song } from "@/types";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// const getSongsByUserId = async (): Promise<Song[]> => {
//   const supabase = createServerComponentClient({ cookies });

//   const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
//   if (sessionError || !sessionData.session) {
//     console.log(sessionError?.message || "No session found");
//     return [];
//   }

//   const { data, error } = await supabase
//     .from("songs")
//     .select("*")
//     .eq("user_id", sessionData.session.user.id)
//     .order("created_at", { ascending: false });

//   if (error) {
//     console.log(error.message);
//     return [];
//   }

//   return data || [];
// };

// export default getSongsByUserId;




"use server";

import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
    return [];
  }

  return data || [];
};

export default getSongs;
