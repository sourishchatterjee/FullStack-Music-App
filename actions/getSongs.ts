import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getSongs=async():Promise<Song[]>=>{
    const supabase =createServerComponentClient({
        
        cookies:cookies
    });

    const {data, error}=await supabase
    .from('songs')
    .select('*')
    .order('created_at',{ascending:false});

if(error){
    console.log(error)

}
return(data as any)|| [];
}
export default getSongs;


// import { Song } from "@/types";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// const getSongs = async (): Promise<Song[]> => {
//   try {
//     const supabase = createServerComponentClient({ cookies });

//     const { data, error } = await supabase
//       .from("songs")
//       .select("*") // ✅ Fetch all songs
//       .order("created_at", { ascending: false });

//     if (error) {
//       console.error("Error fetching songs:", error.message);
//       return [];
//     }

//     return data || []; // ✅ Ensure it always returns an array
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return [];
//   }
// };

// export default getSongs;
