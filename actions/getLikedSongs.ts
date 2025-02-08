


import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getLikedSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({ cookies });

  // Fetch session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Return empty if user is not logged in
  if (!session?.user?.id) return [];

  // Fetch liked songs
  const { data, error } = await supabase
    .from("liked_songs")
    .select("*, songs:song_id(*)") // Ensure correct table join
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching liked songs:", error);
    return [];
  }

  if (!data) return [];

  return data.map((item) => ({ ...item.songs })); // Ensure correct mapping
};

export default getLikedSongs;
