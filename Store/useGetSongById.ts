// import { useEffect, useMemo, useState } from "react";

// import { useSessionContext } from "@supabase/auth-helpers-react";

// import { Song } from "@/types";
// import toast from "react-hot-toast";

// const useGetSongById =(id?:string)=>{

//     const [isLoading,setIsLoading]= useState(false);
//     const [song, setSong]=useState<Song|undefined>(undefined);
//     const {supabaseClient} = useSessionContext();

// useEffect(()=>{
//     if(!id){
//         return;
//     }


//     setIsLoading(true);




// const fetchSong = async () => {
//     const { data, error } = await supabaseClient
//       .from("songs")
//       .select("*")
//       .eq("id", id)
//       .maybeSingle(); // ✅ Avoids the PGRST116 error
   

// console.log(data); // Debug the output

  
//     if (error) {
//       setIsLoading(false);
//       return toast.error(error.message);
//     }
  
//     setSong(data as Song | undefined); // Handles case where no song is found
//     setIsLoading(false);
//   };
  

// fetchSong();
// },
// [id, supabaseClient]);


// return useMemo(()=>({

//     isLoading,
//     song

// }),[isLoading,song]);

// };
// export default  useGetSongById;




import { useEffect, useMemo, useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { Song } from "@/types";
import toast from "react-hot-toast";

const useGetSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<Song | undefined>(undefined);
  const { supabaseClient } = useSessionContext();

  useEffect(() => {
    if (!id) {
      setSong(undefined);
      return;
    }

    let isMounted = true;

    const fetchSong = async () => {
      try {
        setIsLoading(true);

        // First, check if the song exists and how many matches we have
        const { count } = await supabaseClient
          .from('songs')
          .select('*', { count: 'exact', head: true })
          .eq('id', id);

        if (count === 0) {
          setSong(undefined);
          return;
        }

        if (count && count > 1) {
          throw new Error('Multiple songs found with the same ID');
        }

        // Now fetch the single record
        const { data, error } = await supabaseClient
          .from('songs')
          .select('*')
          .eq('id', id)
          .limit(1)
          .single();

        if (error) {
          throw error;
        }

        if (isMounted) {
          setSong(data || undefined);
        }
      } catch (error) {
        console.error('Error fetching song:', error);
        toast.error(error instanceof Error ? error.message : 'Failed to load song');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchSong();

    return () => {
      isMounted = false;
    };
  }, [id, supabaseClient]);

  return useMemo(() => ({
    isLoading,
    song
  }), [isLoading, song]);
};

export default useGetSongById;