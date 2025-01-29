// import { Song } from "@/types";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies, headers } from "next/headers";
// import getSongs from "./getSongs";


// const getSongsByTitle=async(title:string):Promise<Song[]>=>{
//     const supabase =createServerComponentClient({
        
//         cookies:cookies
//     });

//   if(!title){
//     const allSongs= await getSongs();
//     return allSongs
//   }



//     const {data, error}=await supabase
//     .from('songs')
//     .select('*')
//     .ilike("title",`%${title}%`)
//     .order('created_at',{ascending:false});

// if(error){
//     console.log(error)

// }
// return(data as any)|| [];
// }
// export default getSongsByTitle



import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getSongs from "./getSongs";

const getSongsByTitle = async (title?: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  try {
    if (!title) {
      return await getSongs();
    }

    const { data, error } = await supabase
      .from('songs')
      .select('*')
      .ilike('title', `%${title}%`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching songs:', error);
      return [];
    }

    // Convert the raw data to Song type with bigint id
    const songs = data.map(song => ({
      ...song,
      id: BigInt(song.id) // Convert the ID to BigInt
    })) as Song[];

    return songs;
  } catch (error) {
    console.error('Error in getSongsByTitle:', error);
    return [];
  }
};

export default getSongsByTitle;